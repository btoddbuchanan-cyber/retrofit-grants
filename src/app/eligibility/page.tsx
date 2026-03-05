"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface FormState {
  isOwner: string;
  propertyType: string;
  province: string;
  yearBuilt: string;
  primaryResidence: string;
}

export default function EligibilityPage() {
  const [form, setForm] = useState<FormState>({
    isOwner: "",
    propertyType: "",
    province: "",
    yearBuilt: "",
    primaryResidence: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  const isEligible =
    form.isOwner === "yes" &&
    form.primaryResidence === "yes" &&
    form.propertyType !== "" &&
    form.province !== "" &&
    form.yearBuilt !== "" &&
    parseInt(form.yearBuilt) <= new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Eligibility Checker" }]} />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        Check Your Eligibility
      </h1>
      <p className="text-gray-600 mb-8">
        Answer a few questions to find out if you qualify for the Canada Greener
        Homes Retrofit Grant. This takes less than 2 minutes.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-4">
            Property Information
          </h2>

          <div className="gc-form-group">
            <label className="gc-label">
              Are you the registered owner of the property?
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isOwner"
                  value="yes"
                  checked={form.isOwner === "yes"}
                  onChange={(e) => update("isOwner", e.target.value)}
                  className="w-4 h-4"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isOwner"
                  value="no"
                  checked={form.isOwner === "no"}
                  onChange={(e) => update("isOwner", e.target.value)}
                  className="w-4 h-4"
                />
                No
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              Is this your primary residence?
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="primaryResidence"
                  value="yes"
                  checked={form.primaryResidence === "yes"}
                  onChange={(e) => update("primaryResidence", e.target.value)}
                  className="w-4 h-4"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="primaryResidence"
                  value="no"
                  checked={form.primaryResidence === "no"}
                  onChange={(e) => update("primaryResidence", e.target.value)}
                  className="w-4 h-4"
                />
                No
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="propertyType">
              Property Type
            </label>
            <select
              id="propertyType"
              className="gc-select"
              value={form.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
            >
              <option value="">Select property type</option>
              <option value="detached">Single-detached house</option>
              <option value="semi">Semi-detached house</option>
              <option value="row">Row house / townhouse</option>
              <option value="duplex">Duplex / triplex</option>
              <option value="mobile">Mobile / manufactured home (on permanent foundation)</option>
              <option value="small-multi">Small multi-unit (up to 4 units)</option>
            </select>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="province">
              Province or Territory
            </label>
            <select
              id="province"
              className="gc-select"
              value={form.province}
              onChange={(e) => update("province", e.target.value)}
            >
              <option value="">Select province or territory</option>
              {provinces.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="yearBuilt">
              Year the Home Was Built
            </label>
            <input
              type="number"
              id="yearBuilt"
              className="gc-input max-w-xs"
              placeholder="e.g. 1985"
              min="1800"
              max={new Date().getFullYear()}
              value={form.yearBuilt}
              onChange={(e) => update("yearBuilt", e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">
              Home must be an existing structure (not new construction).
            </p>
          </div>
        </div>

        <button type="submit" className="gc-btn gc-btn-primary">
          Check Eligibility
        </button>
      </form>

      {submitted && (
        <div className="mt-8">
          {isEligible ? (
            <div className="gc-alert gc-alert-success">
              <h3 className="font-bold text-gc-green mb-2">
                &#10003; You appear to be eligible!
              </h3>
              <p className="mb-4">
                Based on your responses, your property in {form.province} may
                qualify for the Canada Greener Homes Retrofit Grant. The next
                step is to submit a full application.
              </p>
              <Link href="/apply" className="gc-btn gc-btn-success">
                Start Your Application
              </Link>
            </div>
          ) : (
            <div className="gc-alert gc-alert-danger">
              <h3 className="font-bold text-gc-red mb-2">
                &#10007; You may not be eligible
              </h3>
              <p className="mb-2">
                Based on your responses, your property may not qualify. Common
                reasons include:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                {form.isOwner !== "yes" && (
                  <li>You must be the registered homeowner</li>
                )}
                {form.primaryResidence !== "yes" && (
                  <li>The property must be your primary residence</li>
                )}
                {form.propertyType === "" && (
                  <li>You must select a property type</li>
                )}
                {form.province === "" && (
                  <li>You must select your province or territory</li>
                )}
              </ul>
              <p className="text-sm">
                If you believe this is an error, call{" "}
                <strong>1-800-O-Canada (1-800-622-6232)</strong> for assistance.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
