"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRoot } from "../../../context";
import Share from "../../Components/Share/Share";
import { FaRegCopy, FaHtml5 } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FcCheckmark } from "react-icons/fc";

const Widget = () => {
  const { siteSetting } = useRoot();

  const [preview, setPreview] = useState("preview");
  const [activeTab, setActiveTab] = useState("ok-day");


  const [copyHTML, setCopyHTML] = useState(false);
  const [copyCSS, setCopyCSS] = useState(false);
  const [copyJS, setCopyJS] = useState(false);

  const handleCopyHTML = (widget) => {
    const code = `<div data-widget="${widget}"></div>`;
    navigator.clipboard.writeText(code);
    setCopyHTML(true);
    setTimeout(() => {
      setCopyHTML(false);
    }, 2000);
  };

  const handleCopyCSS = () => {
    const code = `<link rel="stylesheet" href="${process.env.NEXT_PUBLIC_LIVE_URL}/dist/okcalendar.min.css">`;
    navigator.clipboard.writeText(code);
    setCopyCSS(true);
    setTimeout(() => {
      setCopyCSS(false);
    }, 2000);
  };

  const handleCopyJS = () => {
    const code = `<script async src="${process.env.NEXT_PUBLIC_LIVE_URL}/dist/okcalendar.min.js"></script>`;
    navigator.clipboard.writeText(code);
    setCopyJS(true);
    setTimeout(() => {
      setCopyJS(false);
    }, 2000);
  };

  const copyCode = (text) => {
    return (
      <>

        <div
          className="cursor"
          onClick={() => text === "HTML" ? handleCopyHTML(activeTab) : text === "CSS" ? handleCopyCSS() : text === "JS" ? handleCopyJS() : {}}
        >
          <FaRegCopy />
        </div>

      </>
    )
  }

  const markUp = (widget) => {
    return (
      <div className="w-100">
        <div className="ok-markup-wrapper">
          <code className="ok-widget-comment"> &lt;!-- OK Calendar Widget HTML --&gt;</code>
          <div className="ok-markup-head">

            <div className={`${copyHTML ? "ok-copied" : "ok-copy-code"}`}>
              {
                copyHTML ? (
                  <div>
                    <FcCheckmark />
                  </div>
                ) : (

                  <>
                    {copyCode("HTML")}
                  </>
                )
              }
            </div>
            <code>
              &lt;<span className="ok-tag">div</span>{" "}
              <span className="ok-attr">data-widget</span>=
              <span className="ok-tag-data">"{widget}"</span>&gt;&lt;/
              <span className="ok-tag">div</span>&gt;
            </code>
          </div>
        </div>

        <div className="ok-markup-wrapper">
          <code className="ok-widget-comment"> &lt;!-- OK Calendar Widget CSS --&gt;</code>
          <div className="ok-markup-head">

            <div className={`${copyCSS ? "ok-copied" : "ok-copy-code"}`}>
              {
                copyCSS ? (
                  <div>
                    <FcCheckmark />
                  </div>
                ) : (

                  <>
                    {copyCode("CSS")}
                  </>
                )
              }
            </div>
            <code>
              &lt;<span className="ok-tag">link</span>{" "}
              <span className="ok-attr">rel</span>=
              <span className="ok-tag-data">"stylesheet"</span>{" "}
              <span className="ok-attr">href</span>=
              <span className="ok-tag-data">
                "{`${process.env.NEXT_PUBLIC_LIVE_URL}/dist/okcalendar.min.css`}"
              </span>&gt;
            </code>
          </div>
        </div>

        <div className="ok-markup-wrapper">
          <code className="ok-widget-comment"> &lt;!-- OK Calendar Widget JS --&gt;</code>
          <div className="ok-markup-head">

            <div className={`${copyJS ? "ok-copied" : "ok-copy-code"}`}>
              {
                copyJS ? (
                  <div>
                    <FcCheckmark />
                  </div>
                ) : (

                  <>
                    {copyCode("JS")}
                  </>
                )
              }
            </div>
            <code>
              &lt;<span className="ok-tag">script</span>{" "}
              <span className="ok-attr">async</span>{" "}
              <span className="ok-attr">src</span>=
              <span className="ok-tag-data">
                "{`${process.env.NEXT_PUBLIC_LIVE_URL}/dist/okcalendar.min.js`}"
              </span>
              &gt;&lt;/<span className="ok-tag">script</span>&gt;
            </code>

          </div>
        </div>

      </div>
    );
  };

  return (
    <>
      <div className="okv4-container">
        <div className="ok-breadcrumb">
          <ul>
            <li>
              <Link href="https://www.onlinekhabar.com/" target="_blank">
                अनलाइनखबर{" "}
              </Link>
            </li>
            <li>
              <Link href="/">क्यालेन्डर</Link>
            </li>
            <li className="active">
              {siteSetting.widget_title_np || "वेब विजेटहरू"}
            </li>
          </ul>
        </div>

        <div className="ok-bg">
          <div className="ok-desc-content">
            <div className="ok-tab-flex">
              <h4 className="ok-main-title">
                {siteSetting.widget_title_np || "वेब विजेटहरू"}
              </h4>
              <Share
                endpoint="widgets"
                title={
                  siteSetting?.widget_meta_title || siteSetting?.widget_title_np
                }
                preFilledText={
                  siteSetting?.widget_additional_meta_information ||
                  siteSetting?.widget_title_np
                }
                imageUrl={`${siteSetting?.widget_og_image || siteSetting?.site_og_image
                  }`}
              />
            </div>
            <div className="ok-content mt-2">
              {siteSetting.widget_description_np ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: siteSetting.widget_description_np,
                  }}
                />
              ) : (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit, aspernatur consequuntur? Ea nobis ipsa tenetur non
                  impedit rerum, necessitatibus delectus, placeat numquam,
                  eveniet dignissimos debitis quasi fugiat atque temporibus
                  dolores!
                </p>
              )}
            </div>
          </div>

          <div className="ok-widget-container">
            <div className="wrapper">
              <div className="ok-btn__wrapper">
                <div
                  className={`ok-category__btn ${activeTab === "ok-day" ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveTab("ok-day");
                    setPreview("preview");
                  }}
                >
                  <input type="radio" id="ok-day-tab" name="widget" />
                  <label className="ok-category__label " htmlFor="ok-day-tab">
                    Day
                  </label>
                </div>

                <div
                  className={`ok-category__btn ${activeTab === "ok-day-sm" ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveTab("ok-day-sm");
                    setPreview("preview");
                  }}
                >
                  <input type="radio" id="ok-day-tab-sm" name="widget" />
                  <label
                    className="ok-category__label "
                    htmlFor="ok-day-tab-sm"
                  >
                    Day Small
                  </label>
                </div>

                <div
                  className={`ok-category__btn ${activeTab === "ok-month-sm" ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveTab("ok-month-sm");
                    setPreview("preview");
                  }}
                >
                  <input type="radio" id="ok-month-tab-sm" name="widget" />
                  <label
                    className="ok-category__label "
                    htmlFor="ok-month-tab-sm"
                  >
                    Month Small
                  </label>
                </div>

                <div
                  className={`ok-category__btn ${activeTab === "ok-holidays" ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveTab("ok-holidays");
                    setPreview("preview");
                  }}
                >
                  <input type="radio" id="ok-holidays-tab" name="widget" />
                  <label
                    className="ok-category__label "
                    htmlFor="ok-holidays-tab"
                  >
                    Holidays
                  </label>
                </div>
              </div>
            </div>

            <div className="ok-widget-box mt-2">
              <div className="ok-widget-box-header">
                <div className="flex ">
                  <h2
                    className={`ok-eng-font ${preview === "preview" ? "active" : ""
                      }`}
                    onClick={() => setPreview("preview")}
                  >
                    Preview
                  </h2>
                  <h2
                    className={`ok-eng-font ${preview === "markup" ? "active" : ""
                      }`}
                    onClick={() => setPreview("markup")}
                  >
                    Mark up
                  </h2>
                </div>

              </div>

              <div
                className={`ok-widget-box-preview ${preview === "preview" ? "activeStyle" : "inactiveStyle"
                  } `}
              >
                <div
                  className={
                    activeTab === "ok-day" ? "activeStyle" : "inactiveStyle"
                  }
                  data-widget="ok-day"
                ></div>

                <div
                  className={
                    activeTab === "ok-day-sm" ? "activeStyle" : "inactiveStyle"
                  }
                  data-widget="ok-day-sm"
                ></div>

                <div
                  className={
                    activeTab === "ok-month-sm"
                      ? "activeStyle"
                      : "inactiveStyle"
                  }
                  data-widget="ok-month-sm"
                ></div>

                <div
                  className={
                    activeTab === "ok-holidays"
                      ? "activeStyle"
                      : "inactiveStyle"
                  }
                  data-widget="ok-holidays"
                ></div>
              </div>

              <div
                className={`ok-widget-box-markup ${preview === "markup" ? "activeStyle" : "inactiveStyle"
                  } `}
              >
                {markUp(activeTab)}
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Widget;
