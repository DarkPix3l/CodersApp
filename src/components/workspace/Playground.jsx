import React, { useState } from "react";
import testData from "../../api/mock/testData";
import DropDown from "../UI/DropDown";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import TestCase from "./TestCase";

const languageOptions = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
];

const fontSizeOptions = [
  { value: 12, label: "12px" },
  { value: 14, label: "14px" },
  { value: 16, label: "16px" },
  { value: 18, label: "18px" },
];

export default function Playground() {
  const [code, setCode] = useState("const a = 1;");
  const [selectedTestCaseId, setSelectedTestCaseId] = useState(
    testData.tests[0].id
  );
  const [language, setLanguage] = useState("javascript");
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="p-5">
      {/* Top Bar */}
      <div className="p-5">
        <DropDown
          label=""
          options={fontSizeOptions}
          value={fontSize}
          onChange={(val) => setFontSize(Number(val))}
          style={{padding:"0.3rem", backgroundColor:"green"}}
        />
        <DropDown
          label=""
          options={languageOptions}
          value={language}
          onChange={setLanguage}
        />
      </div>

      {/* Main Content */}
      <div>
        {/* Left: Editor */}
        <div>
          <CodeMirror
            value={code}
            height="100%"
            extensions={[language === "python" ? python() : javascript()]}
            onChange={(val) => setCode(val)}
            style={{ fontSize }}
          />
        </div>

        {/* Right: TestCases */}
        <TestCase
          tests={testData.tests}
          selectedTestCaseId={selectedTestCaseId}
          setSelectedTestCaseId={setSelectedTestCaseId}
          onSubmit={() => alert("Submit clicked!")}
        />
      </div>
    </div>
  );
}
