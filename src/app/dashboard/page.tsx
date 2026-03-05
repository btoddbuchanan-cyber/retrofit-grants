"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface Application {
  id: string;
  date: string;
  status: "submitted" | "under-review" | "approved" | "validation-pending" | "validated" | "payment-processing" | "completed" | "rejected";
  grants: { name: string; amount: number; icon: string }[];
  property: string;
  validationStatus: "not-started" | "in-progress" | "submitted" | "approved";
}

const sampleApplications: Application[] = [
  {
    id: "GH-2025-847291",
    date: "2025-02-15",
    status: "approved",
    grants: [
      { name: "Heat Pump Systems", amount: 5000, icon: "🌡️" },
      { name: "Insulation Upgrades", amount: 5000, icon: "🏠" },
      { name: "Air Sealing", amount: 1000, icon: "💨" },
    ],
    property: "123 Maple Street, Ottawa, ON K1A 0A6",
    validationStatus: "not-started",
  },
  {
    id: "GH-2025-623148",
    date: "2025-01-20",
    status: "completed",
    grants: [
      { name: "Smart Thermostats", amount: 250, icon: "🌐" },
      { name: "Windows & Doors", amount: 5000, icon: "🪟" },
    ],
    property: "123 Maple Street, Ottawa, ON K1A 0A6",
    validationStatus: "approved",
  },
];

const statusLabels: Record<Application["status"], { label: string; color: string }> = {
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-800" },
  "under-review": { label: "Under Review", color: "bg-yellow-100 text-yellow-800" },
  approved: { label: "Approved", color: "bg-green-100 text-green-800" },
  "validation-pending": { label: "Validation Pending", color: "bg-orange-100 text-orange-800" },
  validated: { label: "Validated", color: "bg-teal-100 text-teal-800" },
  "payment-processing": { label: "Payment Processing", color: "bg-purple-100 text-purple-800" },
  completed: { label: "Completed", color: "bg-green-100 text-green-800" },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
};

const validationLabels: Record<Application["validationStatus"], { label: string; color: string }> = {
  "not-started": { label: "Not Started", color: "bg-gray-100 text-gray-600" },
  "in-progress": { label: "In Progress", color: "bg-yellow-100 text-yellow-800" },
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-800" },
  approved: { label: "Approved", color: "bg-green-100 text-green-800" },
};

export default function DashboardPage() {
  const [applications] = useState<Application[]>(sampleApplications);

  const totalApproved = applications
    .filter((a) => ["approved", "validation-pending", "validated", "payment-processing", "completed"].includes(a.status))
    .reduce((sum, a) => sum + a.grants.reduce((gs, g) => gs + g.amount, 0), 0);

  const totalPaid = applications
    .filter((a) => a.status === "completed")
    .reduce((sum, a) => sum + a.grants.reduce((gs, g) => gs + g.amount, 0), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "My Dashboard" }]} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gc-blue">My Dashboard</h1>
          <p className="text-gray-600">
            Track your applications, validation status, and grant payments.
          </p>
        </div>
        <Link href="/apply" className="gc-btn gc-btn-primary mt-4 md:mt-0">
          New Application
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">Total Applications</p>
          <p className="text-3xl font-bold text-gc-blue">
            {applications.length}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">Approved Funding</p>
          <p className="text-3xl font-bold text-gc-green">
            ${totalApproved.toLocaleString()}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">Paid Out</p>
          <p className="text-3xl font-bold text-gc-accent">
            ${totalPaid.toLocaleString()}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">Pending Validation</p>
          <p className="text-3xl font-bold text-gc-yellow">
            {
              applications.filter(
                (a) =>
                  a.status === "approved" &&
                  a.validationStatus === "not-started"
              ).length
            }
          </p>
        </div>
      </div>

      {/* Applications list */}
      <h2 className="text-xl font-bold text-gc-blue mb-4">
        Your Applications
      </h2>

      <div className="space-y-4">
        {applications.map((app) => {
          const status = statusLabels[app.status];
          const validation = validationLabels[app.validationStatus];
          const appTotal = app.grants.reduce((s, g) => s + g.amount, 0);

          return (
            <div key={app.id} className="gc-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gc-blue">{app.id}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    Applied: {new Date(app.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    &bull; {app.property}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {app.grants.map((g, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gc-bg px-2 py-1 rounded flex items-center gap-1"
                      >
                        {g.icon} {g.name}
                        <span className="text-gc-green font-medium ml-1">
                          ${g.amount.toLocaleString()}
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>Total:</strong>{" "}
                      <span className="text-gc-green font-bold">
                        ${appTotal.toLocaleString()}
                      </span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <strong>Validation:</strong>{" "}
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${validation.color}`}
                      >
                        {validation.label}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-fit">
                  {app.status === "approved" &&
                    app.validationStatus === "not-started" && (
                      <Link
                        href="/validation"
                        className="gc-btn gc-btn-success text-sm text-center"
                      >
                        Submit Validation
                      </Link>
                    )}
                  <button className="gc-btn gc-btn-outline text-sm">
                    View Details
                  </button>
                </div>
              </div>

              {/* Progress timeline */}
              {app.status !== "rejected" && (
                <div className="mt-4 pt-4 border-t border-gc-border">
                  <div className="flex items-center justify-between text-xs">
                    {[
                      { label: "Applied", done: true },
                      {
                        label: "Approved",
                        done: [
                          "approved",
                          "validation-pending",
                          "validated",
                          "payment-processing",
                          "completed",
                        ].includes(app.status),
                      },
                      {
                        label: "Work Complete",
                        done: [
                          "validated",
                          "payment-processing",
                          "completed",
                        ].includes(app.status) ||
                          app.validationStatus !== "not-started",
                      },
                      {
                        label: "Validated",
                        done:
                          app.validationStatus === "approved" ||
                          app.status === "completed",
                      },
                      {
                        label: "Paid",
                        done: app.status === "completed",
                      },
                    ].map((phase, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-1 flex-1"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            phase.done
                              ? "bg-gc-green text-white"
                              : "bg-gc-gray text-gray-500"
                          }`}
                        >
                          {phase.done ? "✓" : i + 1}
                        </div>
                        <span
                          className={
                            phase.done
                              ? "text-gc-green font-medium"
                              : "text-gray-400"
                          }
                        >
                          {phase.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help section */}
      <div className="gc-card mt-8">
        <h2 className="text-lg font-bold text-gc-blue mb-4">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Application Questions</h3>
            <p className="text-gray-600">
              Call 1-800-O-Canada (1-800-622-6232) or email{" "}
              <a
                href="mailto:info@greenhome.gc.ca"
                className="text-gc-accent"
              >
                info@greenhome.gc.ca
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Validation Support</h3>
            <p className="text-gray-600">
              Need help finding a qualified professional?{" "}
              <a href="#" className="text-gc-accent">
                Search our directory
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Payment Inquiries</h3>
            <p className="text-gray-600">
              Grant payments are processed within 4-6 weeks after validation
              approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
