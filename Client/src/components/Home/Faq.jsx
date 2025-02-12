import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function BasicAccordion() {
  const [isFaqButton1Clicked, setIsFaqButton1Clicked] = useState(false);
  const [isFaqButton2Clicked, setIsFaqButton2Clicked] = useState(false);
  const [isFaqButton3Clicked, setIsFaqButton3Clicked] = useState(false);
  const [isFaqButton4Clicked, setIsFaqButton4Clicked] = useState(false);
  const [isFaqButton5Clicked, setIsFaqButton5Clicked] = useState(false);

  const clickHandler1 = () => {
    setIsFaqButton1Clicked(!isFaqButton1Clicked);
  };
  const clickHandler2 = () => {
    setIsFaqButton2Clicked(!isFaqButton2Clicked);
  };
  const clickHandler3 = () => {
    setIsFaqButton3Clicked(!isFaqButton3Clicked);
  };
  const clickHandler4 = () => {
    setIsFaqButton4Clicked(!isFaqButton4Clicked);
  };
  const clickHandler5 = () => {
    setIsFaqButton5Clicked(!isFaqButton5Clicked);
  };

  return (
    <div className="faq">
      <div className="faq-title-cont">
        <h3>FAQ</h3>
        <img src="hr.svg" alt="" />
        <p>
          Frequently Asked Questions about our premier car sales platform.
          Discover key information from most common questions asked and enhance
          your experience with Nova."
        </p>
      </div>

      <div className="accordion-cont">
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton1Clicked ? "#222a2f" : "initial",
              color: isFaqButton1Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton1Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={clickHandler1}
          >
            <h5>1. What types of cars do you sell?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We offer a diverse range of cars, including sedans, SUVs, trucks,
              and more. Our inventory includes both new and used vehicles to
              cater to different preferences and budgets.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton2Clicked ? "#222a2f" : "initial",
              color: isFaqButton2Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton2Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler2}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>2. How much does shipping cost?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Shipping costs vary based on your location and the size of the
              vehicle. You can view the shipping cost during the checkout
              process before completing your purchase.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton3Clicked ? "#222a2f" : "initial",
              color: isFaqButton3Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton3Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler3}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>3. Is financing available for car purchases?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, we offer financing options to make your car purchase more
              affordable. You can apply for financing during the checkout
              process, and our finance team will guide you through the approval
              process.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton4Clicked ? "#222a2f" : "initial",
              color: isFaqButton4Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton4Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler4}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>4. Do you provide international shipping?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Currently, we only offer shipping within [your country/region].
              However, we're exploring international shipping options, so stay
              tuned for updates.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton5Clicked ? "#222a2f" : "initial",
              color: isFaqButton5Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton5Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler5}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>5. How can I contact your customer support?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You can reach our customer support team via samowen815@gmail.com,
              +254-707-252-331, or through the contact form on our website. We
              are here to assist you with any questions or concerns.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}