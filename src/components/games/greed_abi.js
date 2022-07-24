const greed_abi = [
  {
    data: [
      {
        name: "user",
        type: "felt",
      },
      {
        name: "amount",
        type: "felt",
      },
    ],
    keys: [],
    name: "greed_entry",
    type: "event",
  },
  {
    data: [
      {
        name: "user",
        type: "felt",
      },
    ],
    keys: [],
    name: "greed_winner",
    type: "event",
  },
  {
    data: [
      {
        name: "user",
        type: "felt",
      },
    ],
    keys: [],
    name: "greed_loser",
    type: "event",
  },
  {
    data: [],
    keys: [],
    name: "emergency_shutdown_executed",
    type: "event",
  },
  {
    data: [
      {
        name: "user",
        type: "felt",
      },
    ],
    keys: [],
    name: "user_has_claimed",
    type: "event",
  },
  {
    inputs: [
      {
        name: "deadly_games_address",
        type: "felt",
      },
    ],
    name: "constructor",
    outputs: [],
    type: "constructor",
  },
  {
    inputs: [
      {
        name: "token_address",
        type: "felt",
      },
      {
        name: "deadly_games_address",
        type: "felt",
      },
      {
        name: "karma_address",
        type: "felt",
      },
      {
        name: "pseudo_address",
        type: "felt",
      },
      {
        name: "greed_mark_address",
        type: "felt",
      },
    ],
    name: "set_addresses",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "ticket_amount",
        type: "felt",
      },
    ],
    name: "greed",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "to_address",
        type: "felt",
      },
      {
        name: "admin_address",
        type: "felt",
      },
    ],
    name: "emergency_shutdown",
    outputs: [],
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    type: "function",
  },
];
module.exports = greed_abi;
