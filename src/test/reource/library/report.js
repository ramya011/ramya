$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "End to End test cases for Amazon application",
  "description": "Contains test scenarios includes login the application, search product",
  "id": "end-to-end-test-cases-for-amazon-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7696854,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User login the applciation and verify user name in the header",
  "description": "",
  "id": "end-to-end-test-cases-for-amazon-application;user-login-the-applciation-and-verify-user-name-in-the-header",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launch the applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User moushover to the Hello sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on sign in button on ajax call",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter the username \u00278122447745\u0027 in the emailid/mobile number",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the entered mobile number \u0027+918122447745\u0027 displays on the mobile number feild",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enter the password \u00278148181640\u0027 in the password feild",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify the username \u0027Hello, harish\u0027 in the header page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_applciation()"
});
formatter.result({
  "duration": 16994073063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 3008776346,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_moushover_to_the_Hello_sign_in()"
});
formatter.result({
  "duration": 555696647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 2999613268,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_sign_in_button_on_ajax_call()"
});
formatter.result({
  "duration": 4191797641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8122447745",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_enter_the_username_in_the_emailid_mobile_number(String)"
});
formatter.result({
  "duration": 1078763652,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_continue_button()"
});
formatter.result({
  "duration": 3938205442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+918122447745",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_verify_the_entered_mobile_number_displays_on_the_mobile_number_feild(String)"
});
formatter.result({
  "duration": 208431785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8148181640",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_enter_the_password_in_the_password_feild(String)"
});
formatter.result({
  "duration": 813896043,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 15727665057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5000652173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello, harish",
      "offset": 26
    }
  ],
  "location": "StepDefinition.user_verify_the_username_Hello_harish_in_the_header_page(String)"
});
formatter.result({
  "duration": 1825491940,
  "status": "passed"
});
formatter.after({
  "duration": 1175591,
  "status": "passed"
});
});