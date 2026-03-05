"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useDictionary } from "@/components/DictionaryProvider";

interface FormState {
  isOwner: string;
  propertyType: string;
  province: string;
  yearBuilt: string;
  primaryResidence: string;
}

const provinceCodes = [
  "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT",
] as const;

export default function EligibilityPage() {
  const { dict, locale } = useDictionary();
  const [form, setForm] = useState<FormState>({
    isOwner: "",
    propertyType: "",
    province: "",
    yearBuilt: "",
    primaryResidence: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const provinces = dict.provinces as Record<string, string>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: dict.eligibility.breadcrumb }]}
        locale={locale}
        homeLabel={dict.common.home}
      />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        {dict.eligibility.pageTitle}
      </h1>
      <p className="text-gray-600 mb-8">{dict.eligibility.pageDesc}</p>

      <form onSubmit={handleSubmit}>
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-4">
            {dict.eligibility.propertyInfo}
          </h2>

          <div className="gc-form-group">
            <label className="gc-label">
              {dict.eligibility.isOwnerQuestion}
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
                {dict.common.yes}
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
                {dict.common.no}
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              {dict.eligibility.primaryResidenceQuestion}
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
                {dict.common.yes}
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
                {dict.common.no}
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="propertyType">
              {dict.eligibility.propertyTypeLabel}
            </label>
            <select
              id="propertyType"
              className="gc-select"
              value={form.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
            >
              <option value="">{dict.eligibility.selectPropertyType}</option>
              <option value="detached">{dict.eligibility.detached}</option>
              <option value="semi">{dict.eligibility.semi}</option>
              <option value="row">{dict.eligibility.row}</option>
              <option value="duplex">{dict.eligibility.duplex}</option>
              <option value="mobile">{dict.eligibility.mobile}</option>
              <option value="small-multi">{dict.eligibility.smallMulti}</option>
            </select>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="province">
              {dict.eligibility.provinceLabel}
            </label>
            <select
              id="province"
              className="gc-select"
              value={form.province}
              onChange={(e) => update("province", e.target.value)}
            >
              <option value="">{dict.eligibility.selectProvince}</option>
              {provinceCodes.map((code) => (
                <option key={code} value={code}>
                  {provinces[code]}
                </option>
              ))}
            </select>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="yearBuilt">
              {dict.eligibility.yearBuiltLabel}
            </label>
            <input
              type="number"
              id="yearBuilt"
              className="gc-input max-w-xs"
              placeholder={dict.eligibility.yearBuiltPlaceholder}
              min="1800"
              max={new Date().getFullYear()}
              value={form.yearBuilt}
              onChange={(e) => update("yearBuilt", e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">
              {dict.eligibility.yearBuiltNote}
            </p>
          </div>
        </div>

        <button type="submit" className="gc-btn gc-btn-primary">
          {dict.eligibility.checkButton}
        </button>
      </form>

      {submitted && (
        <div className="mt-8">
          {isEligible ? (
            <div className="gc-alert gc-alert-success">
              <h3 className="font-bold text-gc-green mb-2">
                &#10003; {dict.eligibility.eligibleTitle}
              </h3>
              <p className="mb-4">
                {dict.eligibility.eligibleDesc.replace(
                  "{province}",
                  provinces[form.province] || form.province
                )}
              </p>
              <Link
                href={`/${locale}/apply`}
                className="gc-btn gc-btn-success"
              >
                {dict.eligibility.startApplication}
              </Link>
            </div>
          ) : (
            <div className="gc-alert gc-alert-danger">
              <h3 className="font-bold text-gc-red mb-2">
                &#10007; {dict.eligibility.notEligibleTitle}
              </h3>
              <p className="mb-2">{dict.eligibility.notEligibleDesc}</p>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                {form.isOwner !== "yes" && (
                  <li>{dict.eligibility.notOwner}</li>
                )}
                {form.primaryResidence !== "yes" && (
                  <li>{dict.eligibility.notPrimaryResidence}</li>
                )}
                {form.propertyType === "" && (
                  <li>{dict.eligibility.noPropertyType}</li>
                )}
                {form.province === "" && (
                  <li>{dict.eligibility.noProvince}</li>
                )}
              </ul>
              <p className="text-sm">{dict.eligibility.errorContact}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
