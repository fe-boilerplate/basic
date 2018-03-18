module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "psm": {
      "type": "string",
      "required": true,
      "message": "psm identifier"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A basic FE project."
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "redux": {
      "type": "confirm",
      "message": "Use Redux?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "cd {{destDirName}} && fe dev"
};
