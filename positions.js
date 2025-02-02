const positions = [
  {
    id: 1,
    name: "Goalkeeper",
    categories: [
      {
        id: 16,
        name: "Goalkeeping - Shot Stopping",
      },
      {
        id: 17,
        name: "Goalkeeping - Distribution",
      },
      {
        id: 18,
        name: "Goalkeeping - Communication/Leadership",
      },
      {
        id: 19,
        name: "Goalkeeping - Set Piece Management",
      },
      {
        id: 15,
        name: "Goalkeeping - Positioning",
      },
    ],
  },
  {
    id: 6,
    name: "Attacking Midfielder",
    categories: [
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 12,
        name: "Crossing",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 9,
        name: "Penetration",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
    ],
  },
  {
    id: 7,
    name: "Winger",
    categories: [
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 12,
        name: "Crossing",
      },
      {
        id: 9,
        name: "Penetration",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 10,
        name: "Transition",
      },
    ],
  },
  {
    id: 5,
    name: "Box to Box Midfielder",
    categories: [
      {
        id: 9,
        name: "Penetration",
      },
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 12,
        name: "Crossing",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
    ],
  },
  {
    id: 2,
    name: "Center Defender",
    categories: [
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
    ],
  },
  {
    id: 3,
    name: "Outside  Defender",
    categories: [
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 9,
        name: "Penetration",
      },
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 12,
        name: "Crossing",
      },
    ],
  },
  {
    id: 4,
    name: "Defensive Center Midfielder",
    categories: [
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 6,
        name: "Passing",
      },
    ],
  },
  {
    id: 8,
    name: "Striker",
    categories: [
      {
        id: 8,
        name: "Dribbling",
      },
      {
        id: 11,
        name: "Physical Presence",
      },
      {
        id: 10,
        name: "Transition",
      },
      {
        id: 7,
        name: "Tackling",
      },
      {
        id: 13,
        name: "Finishing",
      },
      {
        id: 14,
        name: "Set Pieces",
      },
      {
        id: 3,
        name: "Ball Control In Tight Spaces",
      },
      {
        id: 4,
        name: "Receiving and Positioning",
      },
      {
        id: 5,
        name: "Shooting",
      },
      {
        id: 6,
        name: "Passing",
      },
      {
        id: 2,
        name: "In the Air",
      },
      {
        id: 1,
        name: "Defending",
      },
      {
        id: 9,
        name: "Penetration",
      },
      {
        id: 12,
        name: "Crossing",
      },
    ],
  },
];
