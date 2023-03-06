const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const schema = new mongoose.schema({
  _id: Number,
  title: {
    type: string,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9 ]*$/.test(v);
      },
      message: "Please enter a valid name",
    },
    required: [true, "Title is required"],
  },
  author: {
    type: string,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9 ]*$/.test(v);
      },
      message: "Please enter a valid name",
    },
    required: [true, "Author is required"],
  },
  publisher: {
    type: string,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9 ]*$/.test(v);
      },
      message: "Please enter a valid name",
    },
    required: [true, "Publisher is required"],
  },
  publishingDate: {
    type: string,
    validate: {
      validator: function (v) {
        return /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/.test(v);
      },
      message: "Please enter a valid date",
    },
  },
  category: {
    type: string,
    enum: {
      values: [
        "Sci-fi",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Horror",
        "Historical",
        "Romance",
      ],
      message: "{Values} is not a category",
    },
  },
  edition: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  pages: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  totalNoOfCopies: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  noOfBorrowedCopies: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  noOfreadingCopies: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  noOfAvailableCopies: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  available: Boolean,
  shelfNo: {
    type: number,
    validate: {
      validator: function (v) {
        return /^\+?(0|[1-9]\d*)$/.test(v);
      },
      message: "Please enter a valid positive integer",
    },
  },
  arrivalDate: {
    validate: {
      validator: function (v) {
        return /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/.test(v);
      },
      message: "Please enter a valid date",
    },
  },
});

mongoose.model("books", schema);
