$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CalculateRefund.feature");
formatter.feature({
  "line": 1,
  "name": "Calculate refund",
  "description": "\r\nAs a traveller I want to calculate refund amounts for several purchases before proceeding to a refund office to get an overview on my expected refunds",
  "id": "calculate-refund",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Check if Taveller is able to calculate his refund",
  "description": "",
  "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Traveler Chooses \u0027\u003cCountry\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \u0027\u003cValue\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\u0027\u003cValue\u003e\u0027 and \u0027\u003cTax\u003e\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;",
  "rows": [
    {
      "cells": [
        "Country",
        "Value",
        "Tax"
      ],
      "line": 14,
      "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;1"
    },
    {
      "cells": [
        "Norway",
        "2000",
        "260"
      ],
      "line": 15,
      "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;2"
    },
    {
      "cells": [
        "Greece",
        "312",
        "38"
      ],
      "line": 16,
      "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;3"
    },
    {
      "cells": [
        "Republic of Korea",
        "987456",
        "68000"
      ],
      "line": 17,
      "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10159672581,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check if Taveller is able to calculate his refund",
  "description": "",
  "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Traveler Chooses \u0027Norway\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \u00272000\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\u00272000\u0027 and \u0027260\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 12627154837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Norway",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 535386784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 136357955,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1305201498,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 162058843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 1
    },
    {
      "val": "260",
      "offset": 12
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 1150381602,
  "status": "passed"
});
formatter.before({
  "duration": 4790777952,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check if Taveller is able to calculate his refund",
  "description": "",
  "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Traveler Chooses \u0027Greece\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \u0027312\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\u0027312\u0027 and \u002738\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 8203629799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greece",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 524933697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 125213310,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1592357259,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 143066571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312",
      "offset": 1
    },
    {
      "val": "38",
      "offset": 11
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 978755973,
  "status": "passed"
});
formatter.before({
  "duration": 4879078248,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check if Taveller is able to calculate his refund",
  "description": "",
  "id": "calculate-refund;check-if-taveller-is-able-to-calculate-his-refund;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Traveler Chooses \u0027Republic of Korea\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \u0027987456\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\u0027987456\u0027 and \u002768000\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 5878402994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Republic of Korea",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 529054969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987456",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 112749405,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 634919585,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 193082513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987456",
      "offset": 1
    },
    {
      "val": "68000",
      "offset": 14
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 800578880,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Check if System is calculating the Total Refund and the Purchase Amaunt correctly when there is more than one purchase value",
  "description": "",
  "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Traveler Chooses \u0027\u003cCountry\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter \u0027\u003cValue\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \u0027\u003cValue2\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \u0027\u003cValue3\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "\u0027\u003cValue\u003e\u0027+\u0027\u003cValue2\u003e\u0027+\u0027\u003cValue3\u003e\u0027 Amount should be displayed correctly in the Total Purchase Field and \u0027\u003cTax\u003e\u0027 + \u0027\u003cTax2\u003e\u0027 + \u0027\u003cTax3\u003e\u0027 should be displayed correctly in the Total Refund",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;",
  "rows": [
    {
      "cells": [
        "Country",
        "Value",
        "Tax",
        "Value2",
        "Tax2",
        "Value3",
        "Tax3"
      ],
      "line": 34,
      "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;1"
    },
    {
      "cells": [
        "Italy",
        "200",
        "25",
        "321",
        "40",
        "456",
        "56"
      ],
      "line": 35,
      "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;2"
    },
    {
      "cells": [
        "Poland",
        "354",
        "40",
        "754",
        "95",
        "1587",
        "203"
      ],
      "line": 36,
      "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;3"
    },
    {
      "cells": [
        "Lebanon",
        "21234567",
        "1576000",
        "2100000",
        "156000",
        "3216547",
        "239000"
      ],
      "line": 37,
      "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4884776020,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Check if System is calculating the Total Refund and the Purchase Amaunt correctly when there is more than one purchase value",
  "description": "",
  "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Traveler Chooses \u0027Italy\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter \u0027200\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \u0027321\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \u0027456\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "\u0027200\u0027+\u0027321\u0027+\u0027456\u0027 Amount should be displayed correctly in the Total Purchase Field and \u002725\u0027 + \u002740\u0027 + \u002756\u0027 should be displayed correctly in the Total Refund",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 7802946121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italy",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 476165007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 112968149,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 2496926255,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 150079074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "321",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 107356426,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 405349321,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 118224809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 108533932,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 535464680,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 111417464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 1
    },
    {
      "val": "321",
      "offset": 7
    },
    {
      "val": "456",
      "offset": 13
    },
    {
      "val": "25",
      "offset": 88
    },
    {
      "val": "40",
      "offset": 95
    },
    {
      "val": "56",
      "offset": 102
    }
  ],
  "location": "CalculateRefund.amount_should_be_displayed_correctly_in_the_Total_Purchase_Field_and_should_be_displayed_correctly_in_the_Total_Refund(double,double,double,double,double,double)"
});
formatter.result({
  "duration": 829483944,
  "status": "passed"
});
formatter.before({
  "duration": 4365905574,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Check if System is calculating the Total Refund and the Purchase Amaunt correctly when there is more than one purchase value",
  "description": "",
  "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Traveler Chooses \u0027Poland\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter \u0027354\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \u0027754\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \u00271587\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "\u0027354\u0027+\u0027754\u0027+\u00271587\u0027 Amount should be displayed correctly in the Total Purchase Field and \u002740\u0027 + \u002795\u0027 + \u0027203\u0027 should be displayed correctly in the Total Refund",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6494748774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poland",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 481885423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 188982526,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 840862731,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 139719283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "754",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 126538911,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 735122660,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 151117997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1587",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 110853167,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 766873666,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 118165028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354",
      "offset": 1
    },
    {
      "val": "754",
      "offset": 7
    },
    {
      "val": "1587",
      "offset": 13
    },
    {
      "val": "40",
      "offset": 89
    },
    {
      "val": "95",
      "offset": 96
    },
    {
      "val": "203",
      "offset": 103
    }
  ],
  "location": "CalculateRefund.amount_should_be_displayed_correctly_in_the_Total_Purchase_Field_and_should_be_displayed_correctly_in_the_Total_Refund(double,double,double,double,double,double)"
});
formatter.result({
  "duration": 1112455028,
  "status": "passed"
});
formatter.before({
  "duration": 4472095363,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Check if System is calculating the Total Refund and the Purchase Amaunt correctly when there is more than one purchase value",
  "description": "",
  "id": "calculate-refund;check-if-system-is-calculating-the-total-refund-and-the-purchase-amaunt-correctly-when-there-is-more-than-one-purchase-value;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Traveler Chooses \u0027Lebanon\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter \u002721234567\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \u00272100000\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \u00273216547\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "\u002721234567\u0027+\u00272100000\u0027+\u00273216547\u0027 Amount should be displayed correctly in the Total Purchase Field and \u00271576000\u0027 + \u0027156000\u0027 + \u0027239000\u0027 should be displayed correctly in the Total Refund",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6204797342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lebanon",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 624464688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21234567",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 218267562,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1405754202,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 152784621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2100000",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 132925070,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 879416555,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 128157981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3216547",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 132141577,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 658846514,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 123558008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21234567",
      "offset": 1
    },
    {
      "val": "2100000",
      "offset": 12
    },
    {
      "val": "3216547",
      "offset": 22
    },
    {
      "val": "1576000",
      "offset": 101
    },
    {
      "val": "156000",
      "offset": 113
    },
    {
      "val": "239000",
      "offset": 124
    }
  ],
  "location": "CalculateRefund.amount_should_be_displayed_correctly_in_the_Total_Purchase_Field_and_should_be_displayed_correctly_in_the_Total_Refund(double,double,double,double,double,double)"
});
formatter.result({
  "duration": 1085364682,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Check if Total Purchase and Total Refund values are displayed correctly in the grid When a value is removed",
  "description": "",
  "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Traveler Chooses \u0027\u003cCountry\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Enter \u0027\u003cValue\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter \u0027\u003cValue2\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter \u0027\u003cValue3\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Click (-) and remove Value2 and Value3",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "\u0027\u003cValue\u003e\u0027 and \u0027\u003cTax\u003e\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;",
  "rows": [
    {
      "cells": [
        "Country",
        "Value",
        "Tax",
        "Value2",
        "Value3"
      ],
      "line": 56,
      "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;1"
    },
    {
      "cells": [
        "Spain",
        "200",
        "22",
        "321",
        "456"
      ],
      "line": 57,
      "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;2"
    },
    {
      "cells": [
        "Poland",
        "354",
        "40",
        "582",
        "8522"
      ],
      "line": 58,
      "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;3"
    },
    {
      "cells": [
        "Singapore",
        "852",
        "46",
        "875",
        "2654"
      ],
      "line": 59,
      "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5054354147,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Check if Total Purchase and Total Refund values are displayed correctly in the grid When a value is removed",
  "description": "",
  "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Traveler Chooses \u0027Spain\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Enter \u0027200\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter \u0027321\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter \u0027456\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Click (-) and remove Value2 and Value3",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "\u0027200\u0027 and \u002722\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 5947972334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spain",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 660516762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 299988316,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1211393642,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 149543762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "321",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 110455079,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 664566931,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 117469394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 103153181,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 901781477,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 110473647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "CalculateRefund.click_and_remove_Value_and_Value(int,int)"
});
formatter.result({
  "duration": 184135275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 1
    },
    {
      "val": "22",
      "offset": 11
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 969655208,
  "status": "passed"
});
formatter.before({
  "duration": 4320727826,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Check if Total Purchase and Total Refund values are displayed correctly in the grid When a value is removed",
  "description": "",
  "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Traveler Chooses \u0027Poland\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Enter \u0027354\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter \u0027582\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter \u00278522\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Click (-) and remove Value2 and Value3",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "\u0027354\u0027 and \u002740\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6904782759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poland",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 592369487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 166704558,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 773856279,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 131558258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "582",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 134159188,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 274141598,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 154855674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8522",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 116234824,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 206244317,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 77808715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "CalculateRefund.click_and_remove_Value_and_Value(int,int)"
});
formatter.result({
  "duration": 200208238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354",
      "offset": 1
    },
    {
      "val": "40",
      "offset": 11
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 744951668,
  "status": "passed"
});
formatter.before({
  "duration": 4914013956,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Check if Total Purchase and Total Refund values are displayed correctly in the grid When a value is removed",
  "description": "",
  "id": "calculate-refund;check-if-total-purchase-and-total-refund-values-are-displayed-correctly-in-the-grid-when-a-value-is-removed;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Traveler Chooses \u0027Singapore\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Enter \u0027852\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter \u0027875\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter \u00272654\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Click (-) and remove Value2 and Value3",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "\u0027852\u0027 and \u002746\u0027 should be displayed correctly in the total Purchase and total Refund Field.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6697078335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Singapore",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 614313677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 132000275,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 755971769,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 153844377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "875",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 108398519,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 812270160,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 164588669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2654",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 149083175,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 968141659,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 149502549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "CalculateRefund.click_and_remove_Value_and_Value(int,int)"
});
formatter.result({
  "duration": 192179456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 1
    },
    {
      "val": "46",
      "offset": 11
    }
  ],
  "location": "CalculateRefund.and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double,double)"
});
formatter.result({
  "duration": 697186122,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Check if The Currency Symbol are displayed correctly",
  "description": "",
  "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Traveler Chooses \u0027\u003cCountry\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Enter \u0027\u003cValue\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Enter \u0027\u003cValue2\u003e\u0027 in Purchase Amaunt field",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The Symbol should be displayed according to the country chosen. E.g \"\u003cCountry\u003e\" \u003d \"\u003cSymbol\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;",
  "rows": [
    {
      "cells": [
        "Country",
        "Value",
        "Value2",
        "Symbol"
      ],
      "line": 74,
      "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;1"
    },
    {
      "cells": [
        "Italy",
        "200",
        "582",
        "EUR"
      ],
      "line": 75,
      "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;2"
    },
    {
      "cells": [
        "Argentina",
        "312",
        "385",
        "ARS"
      ],
      "line": 76,
      "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;3"
    },
    {
      "cells": [
        "Denmark",
        "7548",
        "4562",
        "DKK"
      ],
      "line": 77,
      "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4896587314,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Check if The Currency Symbol are displayed correctly",
  "description": "",
  "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Traveler Chooses \u0027Italy\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Enter \u0027200\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Enter \u0027582\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The Symbol should be displayed according to the country chosen. E.g \"Italy\" \u003d \"EUR\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6663345495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italy",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 820342872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 138781807,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 540945520,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 121441214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "582",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 122582489,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1107692468,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 104828411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italy",
      "offset": 69
    },
    {
      "val": "EUR",
      "offset": 79
    }
  ],
  "location": "CalculateRefund.the_Symbol_should_be_displayed_according_to_the_country_chosen_E_g(String,String)"
});
formatter.result({
  "duration": 1196319296,
  "status": "passed"
});
formatter.before({
  "duration": 5985934233,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Check if The Currency Symbol are displayed correctly",
  "description": "",
  "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Traveler Chooses \u0027Argentina\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Enter \u0027312\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Enter \u0027385\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The Symbol should be displayed according to the country chosen. E.g \"Argentina\" \u003d \"ARS\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6026025155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Argentina",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 863449569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 158103327,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1316368787,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 156443948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "385",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 98819052,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 590675690,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 152899202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Argentina",
      "offset": 69
    },
    {
      "val": "ARS",
      "offset": 83
    }
  ],
  "location": "CalculateRefund.the_Symbol_should_be_displayed_according_to_the_country_chosen_E_g(String,String)"
});
formatter.result({
  "duration": 1230810722,
  "status": "passed"
});
formatter.before({
  "duration": 4996141855,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Check if The Currency Symbol are displayed correctly",
  "description": "",
  "id": "calculate-refund;check-if-the-currency-symbol-are-displayed-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 63,
  "name": "Traveller is on Refund Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Traveler Chooses \u0027Denmark\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Enter \u00277548\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Enter \u00274562\u0027 in Purchase Amaunt field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click Calculate",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Click (+)",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The Symbol should be displayed according to the country chosen. E.g \"Denmark\" \u003d \"DKK\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateRefund.traveller_is_on_Refund_Calculator_Page()"
});
formatter.result({
  "duration": 6771142580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Denmark",
      "offset": 18
    }
  ],
  "location": "CalculateRefund.traveler_Chooses_Italy(String)"
});
formatter.result({
  "duration": 547042738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7548",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 152217607,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 1097355321,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 131365328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4562",
      "offset": 7
    }
  ],
  "location": "CalculateRefund.enter_in_Purchase_Amaunt_field(String)"
});
formatter.result({
  "duration": 107248639,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click_Calculate()"
});
formatter.result({
  "duration": 239724898,
  "status": "passed"
});
formatter.match({
  "location": "CalculateRefund.click()"
});
formatter.result({
  "duration": 188716681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Denmark",
      "offset": 69
    },
    {
      "val": "DKK",
      "offset": 81
    }
  ],
  "location": "CalculateRefund.the_Symbol_should_be_displayed_according_to_the_country_chosen_E_g(String,String)"
});
formatter.result({
  "duration": 925372363,
  "status": "passed"
});
});