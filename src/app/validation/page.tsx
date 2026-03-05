"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { grants } from "@/lib/grants";

interface PhotoSet {
  before: string | null;
  after: string | null;
}

export default function ValidationPage() {
  const [applicationRef, setApplicationRef] = useState("");
  const [grantCategory, setGrantCategory] = useState("");
  const [photos, setPhotos] = useState<PhotoSet>({
    before: null,
    after: null,
  });
  const [additionalPhotos, setAdditionalPhotos] = useState<string[]>([]);

  // Professional validation
  const [professional, setProfessional] = useState({
    name: "",
    licenseNumber: "",
    profession: "",
    company: "",
    phone: "",
    email: "",
    completionDate: "",
    workDescription: "",
    meetsCode: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlePhotoChange = (type: "before" | "after") => {
    // Simulate file selection
    if (type === "before") {
      setPhotos({ ...photos, before: "before-photo.jpg" });
    } else {
      setPhotos({ ...photos, after: "after-photo.jpg" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Validation", href: "/validation" },
            { label: "Submitted" },
          ]}
        />
        <div className="gc-alert gc-alert-success mt-6">
          <h2 className="text-xl font-bold text-gc-green mb-2">
            &#10003; Validation Package Submitted
          </h2>
          <p className="mb-2">
            Your validation for application <strong>{applicationRef}</strong>{" "}
            has been submitted successfully.
          </p>
          <p className="text-sm">
            Our team will review your submission within 5-7 business days. If
            approved, your grant will be deposited within 4-6 weeks.
          </p>
        </div>
        <div className="gc-card mt-6">
          <h3 className="font-bold text-gc-blue mb-2">What Happens Next</h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              Photos and professional validation will be reviewed
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              We may contact you or your professional for clarification
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              Once approved, grant funds are deposited via direct deposit
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              Track your status on your{" "}
              <a href="/dashboard" className="text-gc-accent">
                dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Submit Validation" }]} />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        Submit Retrofit Validation
      </h1>
      <p className="text-gray-600 mb-8">
        After your retrofit work is complete, submit before and after photos
        along with a professional validation to receive your grant funding.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Application Reference */}
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-4">
            Application Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="appRef">
                Application Reference Number{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="appRef"
                type="text"
                className="gc-input"
                placeholder="GH-2025-XXXXXX"
                value={applicationRef}
                onChange={(e) => setApplicationRef(e.target.value)}
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="grantCat">
                Grant Category <span className="text-gc-red">*</span>
              </label>
              <select
                id="grantCat"
                className="gc-select"
                value={grantCategory}
                onChange={(e) => setGrantCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                {grants.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.icon} {g.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Photo Documentation */}
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-2">
            Photo Documentation
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Upload clear, well-lit photos showing the area before and after the
            retrofit work. Photos should include date stamps if possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gc-blue mb-2">
                Before Photos <span className="text-gc-red">*</span>
              </h3>
              <div
                className="gc-upload-area"
                onClick={() => handlePhotoChange("before")}
              >
                {photos.before ? (
                  <div>
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-gc-green font-medium text-sm">
                      {photos.before} uploaded
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click to replace
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl mb-2">📸</div>
                    <p className="text-gray-600 text-sm">
                      Upload before photos
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Show existing equipment/area before work began
                    </p>
                  </div>
                )}
              </div>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>&#8226; Clear view of the area before work</li>
                <li>&#8226; Existing equipment or conditions</li>
                <li>&#8226; Include date stamp or newspaper if possible</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gc-blue mb-2">
                After Photos <span className="text-gc-red">*</span>
              </h3>
              <div
                className="gc-upload-area"
                onClick={() => handlePhotoChange("after")}
              >
                {photos.after ? (
                  <div>
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-gc-green font-medium text-sm">
                      {photos.after} uploaded
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click to replace
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl mb-2">📸</div>
                    <p className="text-gray-600 text-sm">
                      Upload after photos
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Show completed installation from similar angles
                    </p>
                  </div>
                )}
              </div>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>&#8226; Completed installation clearly visible</li>
                <li>&#8226; Equipment labels / model numbers visible</li>
                <li>&#8226; Similar angles to before photos</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gc-blue mb-2">
              Additional Photos (optional)
            </h3>
            <div
              className="gc-upload-area"
              onClick={() =>
                setAdditionalPhotos([...additionalPhotos, "extra-photo.jpg"])
              }
            >
              <div className="text-3xl mb-2">➕</div>
              <p className="text-gray-600 text-sm">
                Add more photos showing work in progress, equipment details,
                permits, etc.
              </p>
            </div>
            {additionalPhotos.length > 0 && (
              <p className="text-sm text-gc-green mt-2">
                {additionalPhotos.length} additional photo(s) added
              </p>
            )}
          </div>
        </div>

        {/* Professional Validation */}
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-2">
            Professional Validation
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            A licensed professional must verify that the retrofit work was
            completed to code and program standards. Accepted professionals
            include builders, engineers, electricians, and plumbers.
          </p>

          <div className="gc-alert gc-alert-info mb-4">
            <strong>Accepted professionals:</strong> Licensed builder, P.Eng /
            P.Geo engineer, master electrician, licensed plumber, certified
            energy advisor, HVAC technician.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profName">
                Professional&apos;s Full Name{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="profName"
                type="text"
                className="gc-input"
                value={professional.name}
                onChange={(e) =>
                  setProfessional({ ...professional, name: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profProfession">
                Profession / Trade <span className="text-gc-red">*</span>
              </label>
              <select
                id="profProfession"
                className="gc-select"
                value={professional.profession}
                onChange={(e) =>
                  setProfessional({
                    ...professional,
                    profession: e.target.value,
                  })
                }
                required
              >
                <option value="">Select profession</option>
                <option value="builder">Licensed Builder / General Contractor</option>
                <option value="engineer">Professional Engineer (P.Eng)</option>
                <option value="electrician">Master Electrician</option>
                <option value="plumber">Licensed Plumber</option>
                <option value="hvac">HVAC Technician</option>
                <option value="energy-advisor">Certified Energy Advisor</option>
                <option value="roofer">Licensed Roofer</option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profLicense">
                License / Certification Number{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="profLicense"
                type="text"
                className="gc-input"
                value={professional.licenseNumber}
                onChange={(e) =>
                  setProfessional({
                    ...professional,
                    licenseNumber: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profCompany">
                Company Name
              </label>
              <input
                id="profCompany"
                type="text"
                className="gc-input"
                value={professional.company}
                onChange={(e) =>
                  setProfessional({ ...professional, company: e.target.value })
                }
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profPhone">
                Phone Number <span className="text-gc-red">*</span>
              </label>
              <input
                id="profPhone"
                type="tel"
                className="gc-input"
                value={professional.phone}
                onChange={(e) =>
                  setProfessional({ ...professional, phone: e.target.value })
                }
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profEmail">
                Email Address <span className="text-gc-red">*</span>
              </label>
              <input
                id="profEmail"
                type="email"
                className="gc-input"
                value={professional.email}
                onChange={(e) =>
                  setProfessional({ ...professional, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="completionDate">
              Date Work Was Completed <span className="text-gc-red">*</span>
            </label>
            <input
              id="completionDate"
              type="date"
              className="gc-input max-w-xs"
              value={professional.completionDate}
              onChange={(e) =>
                setProfessional({
                  ...professional,
                  completionDate: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="workDesc">
              Description of Work Completed{" "}
              <span className="text-gc-red">*</span>
            </label>
            <textarea
              id="workDesc"
              className="gc-input min-h-24"
              placeholder="Describe the retrofit work performed, equipment installed, and any relevant details..."
              value={professional.workDescription}
              onChange={(e) =>
                setProfessional({
                  ...professional,
                  workDescription: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              Does the installation meet all applicable building codes and
              program standards? <span className="text-gc-red">*</span>
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="meetsCode"
                  value="yes"
                  checked={professional.meetsCode === "yes"}
                  onChange={(e) =>
                    setProfessional({
                      ...professional,
                      meetsCode: e.target.value,
                    })
                  }
                  className="w-4 h-4"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="meetsCode"
                  value="no"
                  checked={professional.meetsCode === "no"}
                  onChange={(e) =>
                    setProfessional({
                      ...professional,
                      meetsCode: e.target.value,
                    })
                  }
                  className="w-4 h-4"
                />
                No
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="profComments">
              Additional Comments
            </label>
            <textarea
              id="profComments"
              className="gc-input min-h-20"
              placeholder="Any additional notes about the installation quality, recommendations, etc."
              value={professional.comments}
              onChange={(e) =>
                setProfessional({ ...professional, comments: e.target.value })
              }
            />
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              Upload Signed Validation Form (PDF){" "}
              <span className="text-gc-red">*</span>
            </label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">📋</div>
              <p className="text-gray-600 text-sm">
                Upload the signed professional validation form
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <a href="#" className="text-gc-accent underline">
                  Download blank validation form (PDF)
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="gc-alert gc-alert-warning mb-6">
          <strong>Declaration:</strong> By submitting this validation, both the
          homeowner and the validating professional confirm that all
          information and photos are accurate and truthful. Fraudulent
          submissions may result in criminal charges and repayment of grant
          funds.
        </div>

        <button type="submit" className="gc-btn gc-btn-success">
          Submit Validation Package
        </button>
      </form>
    </div>
  );
}
