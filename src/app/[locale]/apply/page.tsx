"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useDictionary } from "@/components/DictionaryProvider";
import { getGrants } from "@/lib/grants";

type Step = 1 | 2 | 3 | 4 | 5;

const provinceCodes = [
  "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT",
] as const;

export default function ApplyPage() {
  const { dict, locale } = useDictionary();
  const grants = getGrants(locale);
  const provinces = dict.provinces as Record<string, string>;

  const steps = [
    dict.apply.step1,
    dict.apply.step2,
    dict.apply.step3,
    dict.apply.step4,
    dict.apply.step5,
  ];

  const fmt = new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [property, setProperty] = useState({
    propertyType: "",
    yearBuilt: "",
    squareFootage: "",
    heatingType: "",
    numOccupants: "",
  });

  const [selectedGrants, setSelectedGrants] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const toggleGrant = (id: string) => {
    setSelectedGrants((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const totalGrant = grants
    .filter((g) => selectedGrants.includes(g.id))
    .reduce((sum, g) => sum + g.maxAmount, 0);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          personal.firstName &&
          personal.lastName &&
          personal.email &&
          personal.phone &&
          personal.address &&
          personal.city &&
          personal.province &&
          personal.postalCode
        );
      case 2:
        return (
          property.propertyType &&
          property.yearBuilt &&
          property.squareFootage &&
          property.heatingType
        );
      case 3:
        return selectedGrants.length > 0;
      case 4:
        return true;
      case 5:
        return agreedToTerms;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: dict.apply.breadcrumb, href: `/${locale}/apply` },
            { label: dict.apply.confirmBreadcrumb },
          ]}
          locale={locale}
          homeLabel={dict.common.home}
        />
        <div className="gc-alert gc-alert-success mt-6">
          <h2 className="text-xl font-bold text-gc-green mb-2">
            &#10003; {dict.apply.successTitle}
          </h2>
          <p className="mb-4">
            {dict.apply.refNumber}{" "}
            <strong>
              GH-2025-{Math.floor(Math.random() * 900000 + 100000)}
            </strong>
          </p>
          <p className="mb-4 text-sm">
            {dict.apply.confirmationEmail}{" "}
            <strong>{personal.email}</strong>. {dict.apply.decisionTime}
          </p>
        </div>

        <div className="gc-card mt-6">
          <h3 className="font-bold text-gc-blue mb-4">
            {dict.apply.nextSteps}
          </h3>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-active text-xs w-6 h-6 min-w-6">
                1
              </span>
              <span>{dict.apply.nextStep1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                2
              </span>
              <span>{dict.apply.nextStep2}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                3
              </span>
              <span>{dict.apply.nextStep3}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                4
              </span>
              <span>{dict.apply.nextStep4}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                5
              </span>
              <span>
                {dict.apply.nextStep5}{" "}
                <Link href={`/${locale}/validation`}>
                  {dict.apply.validationPortal}
                </Link>
                .
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-6 flex gap-4">
          <Link
            href={`/${locale}/dashboard`}
            className="gc-btn gc-btn-primary"
          >
            {dict.apply.goToDashboard}
          </Link>
          <Link href={`/${locale}`} className="gc-btn gc-btn-outline">
            {dict.apply.returnHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: dict.apply.breadcrumb }]}
        locale={locale}
        homeLabel={dict.common.home}
      />

      <h1 className="text-3xl font-bold text-gc-blue mb-6">
        {dict.apply.pageTitle}
      </h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {steps.map((label, i) => {
          const stepNum = (i + 1) as Step;
          const isActive = stepNum === currentStep;
          const isComplete = stepNum < currentStep;
          return (
            <div key={i} className="flex items-center gap-2 min-w-fit">
              <div
                className={`gc-step text-sm ${
                  isComplete
                    ? "gc-step-complete"
                    : isActive
                    ? "gc-step-active"
                    : "gc-step-pending"
                }`}
              >
                {isComplete ? "\u2713" : stepNum}
              </div>
              <span
                className={`text-sm ${
                  isActive ? "font-bold text-gc-blue" : "text-gray-500"
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <div className="w-8 h-px bg-gc-border" />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="gc-progress mb-8">
        <div
          className="gc-progress-bar"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>

      {/* Step 1: Personal Information */}
      {currentStep === 1 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-6">
            {dict.apply.step1}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="firstName">
                {dict.apply.firstName} <span className="text-gc-red">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="gc-input"
                value={personal.firstName}
                onChange={(e) =>
                  setPersonal({ ...personal, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="lastName">
                {dict.apply.lastName} <span className="text-gc-red">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className="gc-input"
                value={personal.lastName}
                onChange={(e) =>
                  setPersonal({ ...personal, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="email">
                {dict.apply.email} <span className="text-gc-red">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="gc-input"
                value={personal.email}
                onChange={(e) =>
                  setPersonal({ ...personal, email: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="phone">
                {dict.apply.phone} <span className="text-gc-red">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="gc-input"
                placeholder={dict.apply.phonePlaceholder}
                value={personal.phone}
                onChange={(e) =>
                  setPersonal({ ...personal, phone: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="gc-form-group">
            <label className="gc-label" htmlFor="address">
              {dict.apply.address} <span className="text-gc-red">*</span>
            </label>
            <input
              id="address"
              type="text"
              className="gc-input"
              value={personal.address}
              onChange={(e) =>
                setPersonal({ ...personal, address: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="city">
                {dict.apply.city} <span className="text-gc-red">*</span>
              </label>
              <input
                id="city"
                type="text"
                className="gc-input"
                value={personal.city}
                onChange={(e) =>
                  setPersonal({ ...personal, city: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="applyProvince">
                {dict.apply.provinceTerritory}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <select
                id="applyProvince"
                className="gc-select"
                value={personal.province}
                onChange={(e) =>
                  setPersonal({ ...personal, province: e.target.value })
                }
              >
                <option value="">{dict.apply.select}</option>
                {provinceCodes.map((code) => (
                  <option key={code} value={code}>
                    {provinces[code]}
                  </option>
                ))}
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="postalCode">
                {dict.apply.postalCode}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="postalCode"
                type="text"
                className="gc-input"
                placeholder={dict.apply.postalCodePlaceholder}
                value={personal.postalCode}
                onChange={(e) =>
                  setPersonal({ ...personal, postalCode: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Property Details */}
      {currentStep === 2 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-6">
            {dict.apply.step2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="propType">
                {dict.apply.propertyType}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <select
                id="propType"
                className="gc-select"
                value={property.propertyType}
                onChange={(e) =>
                  setProperty({ ...property, propertyType: e.target.value })
                }
              >
                <option value="">{dict.apply.selectPropertyType}</option>
                <option value="detached">{dict.apply.detached}</option>
                <option value="semi">{dict.apply.semi}</option>
                <option value="row">{dict.apply.row}</option>
                <option value="duplex">{dict.apply.duplex}</option>
                <option value="mobile">{dict.apply.mobile}</option>
                <option value="small-multi">{dict.apply.smallMulti}</option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="propYear">
                {dict.apply.yearBuilt}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="propYear"
                type="number"
                className="gc-input"
                placeholder={dict.apply.yearBuiltPlaceholder}
                value={property.yearBuilt}
                onChange={(e) =>
                  setProperty({ ...property, yearBuilt: e.target.value })
                }
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="sqft">
                {dict.apply.squareFootage}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="sqft"
                type="number"
                className="gc-input"
                placeholder={dict.apply.squareFootagePlaceholder}
                value={property.squareFootage}
                onChange={(e) =>
                  setProperty({ ...property, squareFootage: e.target.value })
                }
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="heatType">
                {dict.apply.heatingType}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <select
                id="heatType"
                className="gc-select"
                value={property.heatingType}
                onChange={(e) =>
                  setProperty({ ...property, heatingType: e.target.value })
                }
              >
                <option value="">{dict.apply.selectHeatingType}</option>
                <option value="gas-furnace">{dict.apply.gasFurnace}</option>
                <option value="oil-furnace">{dict.apply.oilFurnace}</option>
                <option value="electric-baseboard">
                  {dict.apply.electricBaseboard}
                </option>
                <option value="electric-furnace">
                  {dict.apply.electricFurnace}
                </option>
                <option value="propane">{dict.apply.propane}</option>
                <option value="wood">{dict.apply.wood}</option>
                <option value="heat-pump">
                  {dict.apply.heatPumpExisting}
                </option>
                <option value="other">{dict.apply.other}</option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="occupants">
                {dict.apply.numOccupants}
              </label>
              <input
                id="occupants"
                type="number"
                className="gc-input"
                placeholder={dict.apply.numOccupantsPlaceholder}
                min="1"
                value={property.numOccupants}
                onChange={(e) =>
                  setProperty({ ...property, numOccupants: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Select Grants */}
      {currentStep === 3 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-2">
            {dict.apply.step3Title}
          </h2>
          <p className="text-gray-600 mb-6">{dict.apply.step3Desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {grants.map((grant) => {
              const selected = selectedGrants.includes(grant.id);
              return (
                <button
                  key={grant.id}
                  type="button"
                  onClick={() => toggleGrant(grant.id)}
                  className={`text-left p-4 rounded border-2 transition-all ${
                    selected
                      ? "border-gc-accent bg-blue-50"
                      : "border-gc-border hover:border-gc-accent"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{grant.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gc-blue text-sm">
                          {grant.shortTitle}
                        </h3>
                        <span
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center text-xs ${
                            selected
                              ? "bg-gc-accent border-gc-accent text-white"
                              : "border-gray-400"
                          }`}
                        >
                          {selected && "\u2713"}
                        </span>
                      </div>
                      <p className="text-gc-green text-sm font-medium">
                        {dict.common.upTo} {fmt.format(grant.maxAmount)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {grant.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedGrants.length > 0 && (
            <div className="gc-alert gc-alert-success">
              <strong>
                {selectedGrants.length > 1
                  ? dict.apply.grantsSelectedPlural.replace(
                      "{count}",
                      String(selectedGrants.length)
                    )
                  : dict.apply.grantsSelected.replace(
                      "{count}",
                      String(selectedGrants.length)
                    )}
              </strong>{" "}
              &mdash; {dict.apply.maxPotentialFunding}{" "}
              <strong>{fmt.format(totalGrant)}</strong>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Upload Documents */}
      {currentStep === 4 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-2">
            {dict.apply.step4Title}
          </h2>
          <p className="text-gray-600 mb-6">{dict.apply.step4Desc}</p>

          <div className="gc-form-group">
            <label className="gc-label">{dict.apply.proofOfOwnership}</label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">&#128196;</div>
              <p className="text-gray-600 text-sm">
                {dict.apply.dragDrop}{" "}
                <span className="text-gc-accent underline">
                  {dict.apply.browse}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {dict.apply.pdfJpgPng}
              </p>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">{dict.apply.energyAudit}</label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">&#128202;</div>
              <p className="text-gray-600 text-sm">
                {dict.apply.dragDrop}{" "}
                <span className="text-gc-accent underline">
                  {dict.apply.browse}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {dict.apply.pdfOnly}
              </p>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">{dict.apply.contractorQuotes}</label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">&#129534;</div>
              <p className="text-gray-600 text-sm">
                {dict.apply.dragDrop}{" "}
                <span className="text-gc-accent underline">
                  {dict.apply.browse}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {dict.apply.pdfJpgPngEach}
              </p>
            </div>
          </div>

          <div className="gc-alert gc-alert-info">
            <strong>Note:</strong> {dict.apply.step4Note}{" "}
            <Link href={`/${locale}/validation`}>
              {dict.apply.validationPortal}
            </Link>
            .
          </div>
        </div>
      )}

      {/* Step 5: Review & Submit */}
      {currentStep === 5 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-6">
            {dict.apply.step5Title}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                {dict.apply.personalInfo}
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(1)}
                >
                  {dict.common.edit}
                </button>
              </h3>
              <div className="bg-gc-bg rounded p-4 text-sm space-y-1">
                <p>
                  <strong>{dict.apply.name}</strong> {personal.firstName}{" "}
                  {personal.lastName}
                </p>
                <p>
                  <strong>{dict.apply.emailLabel}</strong> {personal.email}
                </p>
                <p>
                  <strong>{dict.apply.phoneLabel}</strong> {personal.phone}
                </p>
                <p>
                  <strong>{dict.apply.addressLabel}</strong> {personal.address},{" "}
                  {personal.city},{" "}
                  {provinces[personal.province] || personal.province}{" "}
                  {personal.postalCode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                {dict.apply.propertyDetails}
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(2)}
                >
                  {dict.common.edit}
                </button>
              </h3>
              <div className="bg-gc-bg rounded p-4 text-sm space-y-1">
                <p>
                  <strong>{dict.apply.typeLabel}</strong>{" "}
                  {property.propertyType}
                </p>
                <p>
                  <strong>{dict.apply.yearBuiltLabel}</strong>{" "}
                  {property.yearBuilt}
                </p>
                <p>
                  <strong>{dict.apply.sizeLabel}</strong>{" "}
                  {property.squareFootage} {dict.apply.sqft}
                </p>
                <p>
                  <strong>{dict.apply.heatingLabel}</strong>{" "}
                  {property.heatingType}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                {dict.apply.selectedGrants}
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(3)}
                >
                  {dict.common.edit}
                </button>
              </h3>
              <div className="bg-gc-bg rounded p-4 text-sm space-y-2">
                {grants
                  .filter((g) => selectedGrants.includes(g.id))
                  .map((g) => (
                    <div
                      key={g.id}
                      className="flex items-center justify-between"
                    >
                      <span>
                        {g.icon} {g.title}
                      </span>
                      <span className="text-gc-green font-medium">
                        {dict.common.upTo} {fmt.format(g.maxAmount)}
                      </span>
                    </div>
                  ))}
                <div className="border-t border-gc-border pt-2 mt-2 font-bold flex justify-between">
                  <span>{dict.apply.maxTotalGrant}</span>
                  <span className="text-gc-green">
                    {fmt.format(totalGrant)}
                  </span>
                </div>
              </div>
            </div>

            <div className="gc-alert gc-alert-warning">
              <strong>{dict.apply.warningTitle}</strong>{" "}
              {dict.apply.warningText}
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4"
              />
              <span className="text-sm">
                {dict.apply.agreeText}{" "}
                <a href="#" className="text-gc-accent underline">
                  {dict.apply.termsAndConditions}
                </a>{" "}
                {dict.apply.and}{" "}
                <a href="#" className="text-gc-accent underline">
                  {dict.apply.privacyNotice}
                </a>{" "}
                {dict.apply.agreeTextEnd}
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 ? (
          <button
            className="gc-btn gc-btn-outline"
            onClick={() => setCurrentStep((currentStep - 1) as Step)}
          >
            &larr; {dict.apply.previous}
          </button>
        ) : (
          <div />
        )}

        {currentStep < 5 ? (
          <button
            className="gc-btn gc-btn-primary"
            disabled={!canProceed()}
            onClick={() => setCurrentStep((currentStep + 1) as Step)}
            style={{ opacity: canProceed() ? 1 : 0.5 }}
          >
            {dict.apply.nextStep} &rarr;
          </button>
        ) : (
          <button
            className="gc-btn gc-btn-success"
            disabled={!canProceed()}
            onClick={handleSubmit}
            style={{ opacity: canProceed() ? 1 : 0.5 }}
          >
            {dict.apply.submitApplication}
          </button>
        )}
      </div>
    </div>
  );
}
