'use client'
import React from "react";
import { InlineWidget, PopupButton } from "react-calendly";

export default function Calendly() {

    return (
        <div>
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
      </div>
    );
}