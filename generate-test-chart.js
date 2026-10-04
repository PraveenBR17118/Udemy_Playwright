const fs = require("fs");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

async function main() {
  const results = JSON.parse(
    fs.readFileSync("test-results/results.json", "utf8"),
  );

  let passed = 0;
  let failed = 0;
  let skipped = 0;

  function processSuite(suite) {
    if (suite.specs) {
      suite.specs.forEach((spec) => {
        spec.tests.forEach((test) => {
          const status = test.results[test.results.length - 1]?.status;

          if (status === "passed") {
            passed++;
          } else if (status === "skipped") {
            skipped++;
          } else {
            failed++;
          }
        });
      });
    }

    if (suite.suites) {
      suite.suites.forEach(processSuite);
    }
  }

  results.suites.forEach(processSuite);

  const total = passed + failed + skipped;

  fs.writeFileSync(
    "test-summary.properties",
    `TOTAL=${total}
     PASSED=${passed}
     FAILED=${failed}
     SKIPPED=${skipped}`,
  );

  const chart = new ChartJSNodeCanvas({
    width: 700,
    height: 400,
  });

  const image = await chart.renderToBuffer({
    type: "bar",

    data: {
      labels: ["Total", "Passed", "Failed", "Skipped"],

      datasets: [
        {
          label: "Test Cases",
          data: [total, passed, failed, skipped],
        },
      ],
    },

    options: {
      plugins: {
        title: {
          display: true,
          text: "Playwright Automation Test Results",
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  });

  fs.writeFileSync("playwright-test-results.png", image);

  console.log("==============================");
  console.log("PLAYWRIGHT TEST SUMMARY");
  console.log("==============================");
  console.log(`Total   : ${total}`);
  console.log(`Passed  : ${passed}`);
  console.log(`Failed  : ${failed}`);
  console.log(`Skipped : ${skipped}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
