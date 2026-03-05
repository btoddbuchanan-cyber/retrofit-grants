"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useDictionary } from "@/components/DictionaryProvider";

interface Application {
  id: string;
  date: string;
  status:
    | "submitted"
    | "under-review"
    | "approved"
    | "validation-pending"
    | "validated"
    | "payment-processing"
    | "completed"
    | "rejected";
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
      { name: "Heat Pump Systems", amount: 5000, icon: "\u{1F321}\u{FE0F}" },
      { name: "Insulation Upgrades", amount: 5000, icon: "\u{1F3E0}" },
      { name: "Air Sealing", amount: 1000, icon: "\u{1F4A8}" },
    ],
    property: "123 Maple Street, Ottawa, ON K1A 0A6",
    validationStatus: "not-started",
  },
  {
    id: "GH-2025-623148",
    date: "2025-01-20",
    status: "completed",
    grants: [
      { name: "Smart Thermostats", amount: 250, icon: "\u{1F310}" },
      { name: "Windows & Doors", amount: 5000, icon: "\u{1FA9F}" },
    ],
    property: "123 Maple Street, Ottawa, ON K1A 0A6",
    validationStatus: "approved",
  },
];

export default function DashboardPage() {
  const { dict, locale } = useDictionary();
  const [applications] = useState<Application[]>(sampleApplications);
  const fmt = new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const statusLabels: Record<
    Application["status"],
    { label: string; color: string }
  > = {
    submitted: {
      label: dict.dashboard.statusSubmitted,
      color: "bg-blue-100 text-blue-800",
    },
    "under-review": {
      label: dict.dashboard.statusUnderReview,
      color: "bg-yellow-100 text-yellow-800",
    },
    approved: {
      label: dict.dashboard.statusApproved,
      color: "bg-green-100 text-green-800",
    },
    "validation-pending": {
      label: dict.dashboard.statusValidationPending,
      color: "bg-orange-100 text-orange-800",
    },
    validated: {
      label: dict.dashboard.statusValidated,
      color: "bg-teal-100 text-teal-800",
    },
    "payment-processing": {
      label: dict.dashboard.statusPaymentProcessing,
      color: "bg-purple-100 text-purple-800",
    },
    completed: {
      label: dict.dashboard.statusCompleted,
      color: "bg-green-100 text-green-800",
    },
    rejected: {
      label: dict.dashboard.statusRejected,
      color: "bg-red-100 text-red-800",
    },
  };

  const validationLabels: Record<
    Application["validationStatus"],
    { label: string; color: string }
  > = {
    "not-started": {
      label: dict.dashboard.valNotStarted,
      color: "bg-gray-100 text-gray-600",
    },
    "in-progress": {
      label: dict.dashboard.valInProgress,
      color: "bg-yellow-100 text-yellow-800",
    },
    submitted: {
      label: dict.dashboard.valSubmitted,
      color: "bg-blue-100 text-blue-800",
    },
    approved: {
      label: dict.dashboard.valApproved,
      color: "bg-green-100 text-green-800",
    },
  };

  const totalApproved = applications
    .filter((a) =>
      [
        "approved",
        "validation-pending",
        "validated",
        "payment-processing",
        "completed",
      ].includes(a.status)
    )
    .reduce(
      (sum, a) => sum + a.grants.reduce((gs, g) => gs + g.amount, 0),
      0
    );

  const totalPaid = applications
    .filter((a) => a.status === "completed")
    .reduce(
      (sum, a) => sum + a.grants.reduce((gs, g) => gs + g.amount, 0),
      0
    );

  const phases = [
    dict.dashboard.phaseApplied,
    dict.dashboard.phaseApproved,
    dict.dashboard.phaseWorkComplete,
    dict.dashboard.phaseValidated,
    dict.dashboard.phasePaid,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: dict.dashboard.breadcrumb }]}
        locale={locale}
        homeLabel={dict.common.home}
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gc-blue">
            {dict.dashboard.pageTitle}
          </h1>
          <p className="text-gray-600">{dict.dashboard.pageDesc}</p>
        </div>
        <Link
          href={`/${locale}/apply`}
          className="gc-btn gc-btn-primary mt-4 md:mt-0"
        >
          {dict.dashboard.newApplication}
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">
            {dict.dashboard.totalApplications}
          </p>
          <p className="text-3xl font-bold text-gc-blue">
            {applications.length}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">
            {dict.dashboard.approvedFunding}
          </p>
          <p className="text-3xl font-bold text-gc-green">
            {fmt.format(totalApproved)}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">
            {dict.dashboard.paidOut}
          </p>
          <p className="text-3xl font-bold text-gc-accent">
            {fmt.format(totalPaid)}
          </p>
        </div>
        <div className="gc-card text-center">
          <p className="text-sm text-gray-500 mb-1">
            {dict.dashboard.pendingValidation}
          </p>
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
        {dict.dashboard.yourApplications}
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
                    {dict.dashboard.applied}{" "}
                    {new Date(app.date).toLocaleDateString(
                      locale === "fr" ? "fr-CA" : "en-CA",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}{" "}
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
                          {fmt.format(g.amount)}
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>{dict.dashboard.total}</strong>{" "}
                      <span className="text-gc-green font-bold">
                        {fmt.format(appTotal)}
                      </span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <strong>{dict.dashboard.validationLabel}</strong>{" "}
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
                        href={`/${locale}/validation`}
                        className="gc-btn gc-btn-success text-sm text-center"
                      >
                        {dict.dashboard.submitValidation}
                      </Link>
                    )}
                  <button className="gc-btn gc-btn-outline text-sm">
                    {dict.dashboard.viewDetails}
                  </button>
                </div>
              </div>

              {/* Progress timeline */}
              {app.status !== "rejected" && (
                <div className="mt-4 pt-4 border-t border-gc-border">
                  <div className="flex items-center justify-between text-xs">
                    {[
                      { label: phases[0], done: true },
                      {
                        label: phases[1],
                        done: [
                          "approved",
                          "validation-pending",
                          "validated",
                          "payment-processing",
                          "completed",
                        ].includes(app.status),
                      },
                      {
                        label: phases[2],
                        done:
                          [
                            "validated",
                            "payment-processing",
                            "completed",
                          ].includes(app.status) ||
                          app.validationStatus !== "not-started",
                      },
                      {
                        label: phases[3],
                        done:
                          app.validationStatus === "approved" ||
                          app.status === "completed",
                      },
                      {
                        label: phases[4],
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
                          {phase.done ? "\u2713" : i + 1}
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
        <h2 className="text-lg font-bold text-gc-blue mb-4">
          {dict.dashboard.needHelp}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-1">
              {dict.dashboard.helpAppTitle}
            </h3>
            <p className="text-gray-600">
              {dict.dashboard.helpAppDesc}{" "}
              <a
                href="mailto:info@greenhome.gc.ca"
                className="text-gc-accent"
              >
                info@greenhome.gc.ca
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">
              {dict.dashboard.helpValTitle}
            </h3>
            <p className="text-gray-600">
              {dict.dashboard.helpValDesc}{" "}
              <a href="#" className="text-gc-accent">
                {dict.dashboard.helpValLink}
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">
              {dict.dashboard.helpPayTitle}
            </h3>
            <p className="text-gray-600">{dict.dashboard.helpPayDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
