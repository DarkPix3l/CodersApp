import React, { useState } from "react";
import testData from "../../api/mock/testData";

export default function TestCase() {
  const [selectedTestCaseId, setSelectedTestCaseId] = useState(testData.tests[0]?.id || '');

  return (
    <div
      style={{
        flex: 1,
        padding: 20,
        borderLeft: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Test Cases</h3>
      <div>
        {testData.tests.map((tc) => (
          <div
            key={tc.id}
            onClick={() => setSelectedTestCaseId(tc.id)}
            style={{
              cursor: "pointer",
              padding: 10,
              marginBottom: 10,
              border:
                tc.id === selectedTestCaseId
                  ? "2px solid blue"
                  : "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            <div>
              <strong>Input:</strong> <pre>{tc.inputText}</pre>
            </div>
            <div>
              <strong>Expected Output:</strong> <pre>{tc.outputText}</pre>
            </div>
          </div>
        ))}
      </div>
      <button
        style={{ padding: "10px 15px", fontSize: 16, cursor: "pointer" }}
        onClick={() => alert("Submit clicked!")}
      >
        Submit
      </button>
    </div>
  );
}
