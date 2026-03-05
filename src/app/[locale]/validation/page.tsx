"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useDictionary } from "@/components/DictionaryProvider";
import { getGrants } from "@/lib/grants";

interface PhotoSet {
  before: string | null;
  after: string | null;
}

export default function ValidationPage() {
  const { dict, locale } = useDictionary();
  const grants = getGrants(locale);

  const [applicationRef, setApplicationRef] = useState("");
  const [grantCategory, setGrantCategory] = useState("");
  const [photos, setPhotos] = useState<PhotoSet>({
    before: null,
    after: null,
  });
  const [additionalPhotos, setAdditionalPhotos] = useState<string[]>([]);

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
            { label: dict.validation.breadcrumb, href: `/${locale}/validation` },
            { label: dict.validation.submittedBreadcrumb },
          ]}
          locale={locale}
          homeLabel={dict.common.home}
        />
        <div className="gc-alert gc-alert-success mt-6">
          <h2 className="text-xl font-bold text-gc-green mb-2">
            &#10003; {dict.validation.successTitle}
          </h2>
          <p className="mb-2">
            {dict.validation.successDesc.replace("{ref}", applicationRef)}
          </p>
          <p className="text-sm">{dict.validation.successNote}</p>
        </div>
        <div className="gc-card mt-6">
          <h3 className="font-bold text-gc-blue mb-2">
            {dict.validation.whatNext}
          </h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              {dict.validation.next1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              {dict.validation.next2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              {dict.validation.next3}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gc-green">&#10003;</span>
              {dict.validation.next4}{" "}
              <Link href={`/${locale}/dashboard`} className="text-gc-accent">
                {dict.nav.dashboard}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: dict.validation.breadcrumb }]}
        locale={locale}
        homeLabel={dict.common.home}
      />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        {dict.validation.pageTitle}
      </h1>
      <p className="text-gray-600 mb-8">{dict.validation.pageDesc}</p>

      <form onSubmit={handleSubmit}>
        {/* Application Reference */}
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-4">
            {dict.validation.appRefTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="appRef">
                {dict.validation.appRefLabel}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <input
                id="appRef"
                type="text"
                className="gc-input"
                placeholder={dict.validation.appRefPlaceholder}
                value={applicationRef}
                onChange={(e) => setApplicationRef(e.target.value)}
                required
              />
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="grantCat">
                {dict.validation.grantCategoryLabel}{" "}
                <span className="text-gc-red">*</span>
              </label>
              <select
                id="grantCat"
                className="gc-select"
                value={grantCategory}
                onChange={(e) => setGrantCategory(e.target.value)}
                required
              >
                <option value="">{dict.validation.selectCategory}</option>
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
            {dict.validation.photoTitle}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {dict.validation.photoDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gc-blue mb-2">
                {dict.validation.beforePhotos}{" "}
                <span className="text-gc-red">*</span>
              </h3>
              <div
                className="gc-upload-area"
                onClick={() => handlePhotoChange("before")}
              >
                {photos.before ? (
                  <div>
                    <div className="text-3xl mb-2">&#9989;</div>
                    <p className="text-gc-green font-medium text-sm">
                      {photos.before} {dict.validation.uploaded}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {dict.validation.clickToReplace}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl mb-2">&#128248;</div>
                    <p className="text-gray-600 text-sm">
                      {dict.validation.uploadBefore}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {dict.validation.beforePhotoDesc}
                    </p>
                  </div>
                )}
              </div>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>&#8226; {dict.validation.beforeTip1}</li>
                <li>&#8226; {dict.validation.beforeTip2}</li>
                <li>&#8226; {dict.validation.beforeTip3}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gc-blue mb-2">
                {dict.validation.afterPhotos}{" "}
                <span className="text-gc-red">*</span>
              </h3>
              <div
                className="gc-upload-area"
                onClick={() => handlePhotoChange("after")}
              >
                {photos.after ? (
                  <div>
                    <div className="text-3xl mb-2">&#9989;</div>
                    <p className="text-gc-green font-medium text-sm">
                      {photos.after} {dict.validation.uploaded}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {dict.validation.clickToReplace}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl mb-2">&#128248;</div>
                    <p className="text-gray-600 text-sm">
                      {dict.validation.uploadAfter}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {dict.validation.afterPhotoDesc}
                    </p>
                  </div>
                )}
              </div>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>&#8226; {dict.validation.afterTip1}</li>
                <li>&#8226; {dict.validation.afterTip2}</li>
                <li>&#8226; {dict.validation.afterTip3}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gc-blue mb-2">
              {dict.validation.additionalPhotos}
            </h3>
            <div
              className="gc-upload-area"
              onClick={() =>
                setAdditionalPhotos([...additionalPhotos, "extra-photo.jpg"])
              }
            >
              <div className="text-3xl mb-2">&#10133;</div>
              <p className="text-gray-600 text-sm">
                {dict.validation.additionalPhotosDesc}
              </p>
            </div>
            {additionalPhotos.length > 0 && (
              <p className="text-sm text-gc-green mt-2">
                {additionalPhotos.length} {dict.validation.additionalAdded}
              </p>
            )}
          </div>
        </div>

        {/* Professional Validation */}
        <div className="gc-card mb-6">
          <h2 className="text-lg font-bold text-gc-blue mb-2">
            {dict.validation.proTitle}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {dict.validation.proDesc}
          </p>

          <div className="gc-alert gc-alert-info mb-4">
            <strong>{dict.validation.acceptedProfessionals}</strong>{" "}
            {dict.validation.acceptedList}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profName">
                {dict.validation.proName}{" "}
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
                {dict.validation.proProfession}{" "}
                <span className="text-gc-red">*</span>
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
                <option value="">{dict.validation.selectProfession}</option>
                <option value="builder">{dict.validation.builder}</option>
                <option value="engineer">{dict.validation.engineer}</option>
                <option value="electrician">
                  {dict.validation.electrician}
                </option>
                <option value="plumber">{dict.validation.plumber}</option>
                <option value="hvac">{dict.validation.hvac}</option>
                <option value="energy-advisor">
                  {dict.validation.energyAdvisor}
                </option>
                <option value="roofer">{dict.validation.roofer}</option>
              </select>
            </div>
            <div className="gc-form-group">
              <label className="gc-label" htmlFor="profLicense">
                {dict.validation.proLicense}{" "}
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
                {dict.validation.proCompany}
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
                {dict.validation.proPhone}{" "}
                <span className="text-gc-red">*</span>
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
                {dict.validation.proEmail}{" "}
                <span className="text-gc-red">*</span>
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
              {dict.validation.completionDate}{" "}
              <span className="text-gc-red">*</span>
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
              {dict.validation.workDesc}{" "}
              <span className="text-gc-red">*</span>
            </label>
            <textarea
              id="workDesc"
              className="gc-input min-h-24"
              placeholder={dict.validation.workDescPlaceholder}
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
              {dict.validation.meetsCodeQuestion}{" "}
              <span className="text-gc-red">*</span>
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
                {dict.common.yes}
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
                {dict.common.no}
              </label>
            </div>
          </div>

          <div className="gc-form-group">
            <label className="gc-label" htmlFor="profComments">
              {dict.validation.proComments}
            </label>
            <textarea
              id="profComments"
              className="gc-input min-h-20"
              placeholder={dict.validation.proCommentsPlaceholder}
              value={professional.comments}
              onChange={(e) =>
                setProfessional({ ...professional, comments: e.target.value })
              }
            />
          </div>

          <div className="gc-form-group">
            <label className="gc-label">
              {dict.validation.uploadSignedForm}{" "}
              <span className="text-gc-red">*</span>
            </label>
            <div className="gc-upload-area">
              <div className="text-3xl mb-2">&#128203;</div>
              <p className="text-gray-600 text-sm">
                {dict.validation.uploadSignedFormDesc}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <a href="#" className="text-gc-accent underline">
                  {dict.validation.downloadBlankForm}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="gc-alert gc-alert-warning mb-6">
          <strong>{dict.validation.declaration}</strong>{" "}
          {dict.validation.declarationText}
        </div>

        <button type="submit" className="gc-btn gc-btn-success">
          {dict.validation.submitButton}
        </button>
      </form>
    </div>
  );
}
