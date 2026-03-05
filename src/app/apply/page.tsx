"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { grants } from "@/lib/grants";

type Step = 1 | 2 | 3 | 4 | 5;

const steps = [
  "Personal Information",
  "Property Details",
  "Select Grants",
  "Upload Documents",
  "Review & Submit",
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
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
            { label: "Apply", href: "/apply" },
            { label: "Confirmation" },
          ]}
        />
        <div className="gc-alert gc-alert-success mt-6">
          <h2 className="text-xl font-bold text-gc-green mb-2">
            &#10003; Application Submitted Successfully!
          </h2>
          <p className="mb-4">
            Your application reference number is{" "}
            <strong>GH-2025-{Math.floor(Math.random() * 900000 + 100000)}</strong>
          </p>
          <p className="mb-4 text-sm">
            A confirmation email has been sent to{" "}
            <strong>{personal.email}</strong>. You will receive a decision
            within 10 business days.
          </p>
        </div>

        <div className="gc-card mt-6">
          <h3 className="font-bold text-gc-blue mb-4">Next Steps</h3>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-active text-xs w-6 h-6 min-w-6">
                1
              </span>
              <span>
                Wait for your application to be reviewed and approved (up to 10
                business days).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                2
              </span>
              <span>
                Once approved, you have 12 months to complete your retrofit
                work.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                3
              </span>
              <span>
                Take before photos, complete the work, then take after photos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                4
              </span>
              <span>
                Have a qualified professional validate the installation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="gc-step gc-step-pending text-xs w-6 h-6 min-w-6">
                5
              </span>
              <span>
                Submit your validation package through the{" "}
                <Link href="/validation">Validation portal</Link>.
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-6 flex gap-4">
          <Link href="/dashboard" className="gc-btn gc-btn-primary">
            Go to My Dashboard
          </Link>
          <Link href="/" className="gc-btn gc-btn-outline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Apply for Grants" }]} />

      <h1 className="text-3xl font-bold text-gc-blue mb-6">
        Apply for Retrofit Grants
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
                {isComplete ? "✓" : stepNum}
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
            Step 1: Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="firstName">
                First Name <span className="text-gc-red">*</span>
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
                Last Name <span className="text-gc-red">*</span>
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
                Email Address <span className="text-gc-red">*</span>
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
                Phone Number <span className="text-gc-red">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="gc-input"
                placeholder="(555) 555-5555"
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
              Street Address <span className="text-gc-red">*</span>
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
                City <span className="text-gc-red">*</span>
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
                Province / Territory <span className="text-gc-red">*</span>
              </label>
              <select
                id="applyProvince"
                className="gc-select"
                value={personal.province}
                onChange={(e) =>
                  setPersonal({ ...personal, province: e.target.value })
                }
              >
                <option value="">Select</option>
                {provinces.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="postalCode">
                Postal Code <span className="text-gc-red">*</span>
              </label>
              <input
                id="postalCode"
                type="text"
                className="gc-input"
                placeholder="A1A 1A1"
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
            Step 2: Property Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="propType">
                Property Type <span className="text-gc-red">*</span>
              </label>
              <select
                id="propType"
                className="gc-select"
                value={property.propertyType}
                onChange={(e) =>
                  setProperty({ ...property, propertyType: e.target.value })
                }
              >
                <option value="">Select property type</option>
                <option value="detached">Single-detached house</option>
                <option value="semi">Semi-detached house</option>
                <option value="row">Row house / townhouse</option>
                <option value="duplex">Duplex / triplex</option>
                <option value="mobile">Mobile / manufactured home</option>
                <option value="small-multi">
                  Small multi-unit (up to 4 units)
                </option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="propYear">
                Year Built <span className="text-gc-red">*</span>
              </label>
              <input
                id="propYear"
                type="number"
                className="gc-input"
                placeholder="e.g. 1985"
                value={property.yearBuilt}
                onChange={(e) =>
                  setProperty({ ...property, yearBuilt: e.target.value })
                }
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="sqft">
                Approximate Square Footage{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="sqft"
                type="number"
                className="gc-input"
                placeholder="e.g. 1800"
                value={property.squareFootage}
                onChange={(e) =>
                  setProperty({ ...property, squareFootage: e.target.value })
                }
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="heatType">
                Current Heating Type <span className="text-gc-red">*</span>
              </label>
              <select
                id="heatType"
                className="gc-select"
                value={property.heatingType}
                onChange={(e) =>
                  setProperty({ ...property, heatingType: e.target.value })
                }
              >
                <option value="">Select heating type</option>
                <option value="gas-furnace">Natural gas furnace</option>
                <option value="oil-furnace">Oil furnace</option>
                <option value="electric-baseboard">Electric baseboard</option>
                <option value="electric-furnace">Electric furnace</option>
                <option value="propane">Propane</option>
                <option value="wood">Wood / pellet stove</option>
                <option value="heat-pump">Existing heat pump</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="occupants">
                Number of Occupants
              </label>
              <input
                id="occupants"
                type="number"
                className="gc-input"
                placeholder="e.g. 4"
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
            Step 3: Select Grant Categories
          </h2>
          <p className="text-gray-600 mb-6">
            Select the retrofit upgrades you plan to make. You can choose
            multiple categories.
          </p>

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
                          {selected && "✓"}
                        </span>
                      </div>
                      <p className="text-gc-green text-sm font-medium">
                        Up to ${grant.maxAmount.toLocaleString()}
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
                {selectedGrants.length} grant
                {selectedGrants.length > 1 ? "s" : ""} selected
              </strong>{" "}
              &mdash; Maximum potential funding:{" "}
              <strong>${totalGrant.toLocaleString()}</strong>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Upload Documents */}
      {currentStep === 4 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-2">
            Step 4: Supporting Documents
          </h2>
          <p className="text-gray-600 mb-6">
            Upload any supporting documents. These are optional at the
            application stage but will be required during validation.
          </p>

          <div className="gc-form-group">
            <label className="gc-label">
              Proof of Ownership (e.g., property tax bill, title deed)
            </label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">📄</div>
              <p className="text-gray-600 text-sm">
                Drag and drop files here, or{" "}
                <span className="text-gc-accent underline">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF, JPG, or PNG up to 10MB
              </p>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              Energy Audit Report (if available)
            </label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-gray-600 text-sm">
                Drag and drop files here, or{" "}
                <span className="text-gc-accent underline">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF up to 10MB
              </p>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              Contractor Quotes (if available)
            </label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">🧾</div>
              <p className="text-gray-600 text-sm">
                Drag and drop files here, or{" "}
                <span className="text-gc-accent underline">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF, JPG, or PNG up to 10MB each
              </p>
            </div>
          </div>

          <div className="gc-alert gc-alert-info">
            <strong>Note:</strong> Before and after photos and professional
            validation will be required after your retrofit work is complete.
            You can submit these through the{" "}
            <Link href="/validation">Validation portal</Link>.
          </div>
        </div>
      )}

      {/* Step 5: Review & Submit */}
      {currentStep === 5 && (
        <div className="gc-card">
          <h2 className="text-xl font-bold text-gc-blue mb-6">
            Step 5: Review &amp; Submit
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                Personal Information
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(1)}
                >
                  Edit
                </button>
              </h3>
              <div className="bg-gc-bg rounded p-4 text-sm space-y-1">
                <p>
                  <strong>Name:</strong> {personal.firstName}{" "}
                  {personal.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {personal.email}
                </p>
                <p>
                  <strong>Phone:</strong> {personal.phone}
                </p>
                <p>
                  <strong>Address:</strong> {personal.address}, {personal.city},{" "}
                  {personal.province} {personal.postalCode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                Property Details
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(2)}
                >
                  Edit
                </button>
              </h3>
              <div className="bg-gc-bg rounded p-4 text-sm space-y-1">
                <p>
                  <strong>Type:</strong> {property.propertyType}
                </p>
                <p>
                  <strong>Year Built:</strong> {property.yearBuilt}
                </p>
                <p>
                  <strong>Size:</strong> {property.squareFootage} sq ft
                </p>
                <p>
                  <strong>Heating:</strong> {property.heatingType}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gc-blue-light mb-2 flex items-center justify-between">
                Selected Grants
                <button
                  className="text-sm text-gc-accent underline font-normal"
                  onClick={() => setCurrentStep(3)}
                >
                  Edit
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
                        Up to ${g.maxAmount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                <div className="border-t border-gc-border pt-2 mt-2 font-bold flex justify-between">
                  <span>Maximum Total Grant</span>
                  <span className="text-gc-green">
                    ${totalGrant.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="gc-alert gc-alert-warning">
              <strong>Important:</strong> By submitting this application, you
              confirm that all information provided is accurate. False or
              misleading information may result in denial of your application or
              repayment of grant funds.
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4"
              />
              <span className="text-sm">
                I confirm that I am the registered owner of this property, the
                information provided is accurate, and I agree to the{" "}
                <a href="#" className="text-gc-accent underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-gc-accent underline">
                  Privacy Notice
                </a>{" "}
                of the Canada Greener Homes Retrofit Grant program.
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
            &larr; Previous
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
            Next Step &rarr;
          </button>
        ) : (
          <button
            className="gc-btn gc-btn-success"
            disabled={!canProceed()}
            onClick={handleSubmit}
            style={{ opacity: canProceed() ? 1 : 0.5 }}
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
}
