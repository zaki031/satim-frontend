"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const testResults = [
  {
    URL: "test001.com",
    status: "accepted",
    testPassed: 50,
    testFailed: 5,
    percentageAccepted: "90%",
    pvLink: "pvLink001",
    date: "2024-09-21 14:30",
    failedTestTypes: ["Captcha", "Logo", "SSL"],
  },
  {
    URL: "test002.com",
    status: "refused",
    testPassed: 40,
    testFailed: 10,
    percentageAccepted: "80%",
    pvLink: "",
    date: "2024-09-20 11:15",
    failedTestTypes: ["Request validation", "Fraud", "Bad return handling"],
  },
  {
    URL: "test003.com",
    status: "accepted",
    testPassed: 55,
    testFailed: 5,
    percentageAccepted: "92%",
    pvLink: "pvLink003",
    date: "2024-09-19 16:45",
    failedTestTypes: ["Green Number"],
  },
  {
    URL: "test004.com",
    status: "accepted",
    testPassed: 60,
    testFailed: 3,
    percentageAccepted: "95%",
    pvLink: "pvLink004",
    date: "2024-09-18 10:30",
    failedTestTypes: ["Bank image"],
  },
  {
    URL: "test005.com",
    status: "accepted",
    testPassed: 45,
    testFailed: 8,
    percentageAccepted: "85%",
    pvLink: "pvLink005",
    date: "2024-09-17 08:20",
    failedTestTypes: ["Captcha", "Fraud", "SSL"],
  },
  {
    URL: "test006.com",
    status: "refused",
    testPassed: 38,
    testFailed: 12,
    percentageAccepted: "76%",
    pvLink: "",
    date: "2024-09-16 09:45",
    failedTestTypes: ["Request validation", "Fraud", "Bad return handling", "SSL"],
  },
  {
    URL: "test007.com",
    status: "accepted",
    testPassed: 52,
    testFailed: 7,
    percentageAccepted: "88%",
    pvLink: "pvLink007",
    date: "2024-09-15 14:10",
    failedTestTypes: ["Logo", "SSL"],
  },
  {
    URL: "test008.com",
    status: "refused",
    testPassed: 35,
    testFailed: 15,
    percentageAccepted: "70%",
    pvLink: "",
    date: "2024-09-14 12:00",
    failedTestTypes: ["Request validation", "Captcha", "Bad return handling"],
  },
];

export function TestReports() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [statusFilter, setStatusFilter] = useState(""); 
  const [urlFilter, setUrlFilter] = useState(""); 

  const filteredResults = testResults.filter(
    (result) =>
      (statusFilter === "" || result.status === statusFilter) &&
      (urlFilter === "" || result.URL.includes(urlFilter))
  );

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  const currentItems = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white rounded-[14px] py-6 px-8">
      <h2 className="font-bold text-3xl mb-4">Latest test reports</h2>

      <div className="flex gap-4 mb-6">
        <div>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="ml- bg-transparent border rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="accepted">Accepted</option>
            <option value="refused">Refused</option>
          </select>
        </div>

        <div></div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">URL</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Test passed</TableHead>
            <TableHead>Test failed</TableHead>
            <TableHead>Test success percentage</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">pv Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((result) => (
            <Dialog key={result.URL}>
              <DialogTrigger asChild>
                <TableRow className="cursor-pointer">
                  <TableCell className="font-medium py-4">{result.URL}</TableCell>
                  <TableCell>
                    <div
                      className={`w-[50%] rounded-sm text-center p-1 ${
                        result.status === "accepted"
                          ? "text-green-400 bg-[#DCFCE8]"
                          : "bg-[#FDE5E3] text-red-400"
                      }`}
                    >
                      {result.status}
                    </div>
                  </TableCell>
                  <TableCell className="text-green-500">
                    {result.testPassed}
                  </TableCell>
                  <TableCell className="text-red-500">{result.testFailed}</TableCell>
                  <TableCell>{result.percentageAccepted}</TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell className="text-right">
                    <Link href={result.pvLink} className="underline">
                      {result.pvLink}
                    </Link>
                  </TableCell>
                </TableRow>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Test Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <h4>URL</h4>
                      <Link className="text-[#FB3D3D] underline" href={result.URL}>
                        {result.URL}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <h4>Status</h4>
                      <div
                        className={`w-[50%] rounded-sm text-center p-1 ${
                          result.status === "accepted"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {result.status}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <h4>Test success percentage</h4> {result.percentageAccepted}
                    </div>
                    <div className="flex justify-between">
                      <h4>Test Passed</h4> {result.testPassed}
                    </div>
                    <div className="flex justify-between">
                      <h4>Test Failed</h4> {result.testFailed}
                    </div>
                    <div className="flex justify-between">
                      <h4>Date</h4> {result.date}
                    </div>
                    {result.failedTestTypes && result.failedTestTypes.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <h4>Failed Tests</h4>
                        <div className="p-2 bg-red-100 text-red-700 rounded">
                          {result.failedTestTypes.map((test, index) => (
                            <div key={index}>{test}</div>
                          ))}
                        </div>
                      </div>
                    )}
                    {result.status === "accepted" && (
                      <div className="flex justify-between">
                        <h4>PV Link</h4>
                        <Button className="bg-[#FB3D3D] text-white rounded-lg">
                          <Download size={14} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between mt-6">
        <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default TestReports;
