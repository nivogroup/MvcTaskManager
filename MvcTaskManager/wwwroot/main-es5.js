function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>about works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n</nav>\n  \n<h5>Dashboard</h5> \n<h6>{{ToDay | date : \"d/M/y\"}}</h6>\n<div class=\"row\">\n    <div class=\"col-lg-3 pb-3\" style=\"background-color:#e9e6e6\">\n      <div class=\"row\">\n        <div class=\"col-11 text-white text-center mx-auto rounded pt-2 pb-2 font-weight-bold\"\n          style=\"background-color:#a39e9e; font-family:  'Arial Narrow Bold', sans-serif\">{{Designation | uppercase}}</div>\n        <div class=\"col-12 text-center mt-2\">\n          <img src=\"assets/user.png\" width=\"120px\">\n        </div>\n        <div class=\"col-12 text-center pt-2 pb-2 font-weight-bold\" style=\"font-family: Tahoma\">\n          {{Username | lowercase}}\n        </div>\n        <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: Arial\">TEAM SUMMARY</div>\n        <div class=\"col-12 mb-3\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              NO. OF TEAM MEMBERS\n              <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{NoOfTeamMembers}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              TOTAL COST OF ALL PROJECTS\n              <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">$ {{TotalCostOfAllProjects}} k</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              PENDING TASKS\n              <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{PendingTasks}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              UPCOMING PROJECTS\n              <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{UpComingProjects | percent}}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: 'Arial Narrow'\">CLIENTS</div>\n        <div class=\"col-12\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" *ngFor=\"let client of Clients\">{{client | slice: 0: 10}}</li>\n          </ul>\n          <!--{{TeamMembersSummary}}-->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"row\">\n        <div class=\"col-12 pt-0 pb-2\" style=\"background-color:#e9e6e6\">\n          <div class=\"row mt-2\">\n            <div class=\"col-6 text-left\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\">\n                  Project A\n                </button>\n                <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let project of Projects\" onclick=\"return false\"\n                    (click)=\"onProjectChange($event)\">{{project}}</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6 text-right\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\">\n                  2019\n                </button>\n                <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let year of Years\">\n                        <span [ngSwitch]=\"year\">\n                            <span *ngSwitchCase=\"'2019'\" style=\"color: green;\">{{year}}</span>\n                            <span *ngSwitchCase=\"'2018'\" style=\"color: blue;\">{{year}}</span>\n                            <span *ngSwitchCase=\"'2017'\" style=\"color: red;\">{{year}}</span>\n                            <span *ngSwitchDefault style=\"color: black;\">{{year}}</span>\n                        </span>\n                    </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-auto rounded font-weight-bold\"\n          style=\"background-color: #718d97; font-family: 'Arial Narrow'\">PROJECT BRIEFING</div>\n        <div class=\"col-12\">\n          <table class=\"table table-borderless\">\n            <tr>\n              <td>Project Cost</td>\n              <td>{{ProjectCost | currency: \"INR\" }}</td>\n            </tr>\n            <tr>\n              <td>Current Expenditure</td>\n              <td>{{CurrentExpenditure | currency: \"INR\"}}</td>\n            </tr>\n            <tr>\n              <td>Available Funds</td>\n              <td>{{AvailableFunds | currency: \"INR\"}}</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-2 rounded font-weight-bold\"\n          style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS SUMMARY</div>\n        <div class=\"col-12\">\n          <table class=\"table\">\n            <tr>\n              <th>Region</th>\n              <th>Team Members Count</th>\n              <th>Temporarily Unavailable Members</th>\n            </tr>\n            <tr *ngFor=\"let teamMemberSumary of TeamMembersSummary\">\n              <td>\n                <b>{{teamMemberSumary.Region}}</b>\n              </td>\n              <td>\n                {{teamMemberSumary.TeamMembersCount}}\n              </td>\n              <td>\n                {{teamMemberSumary.TemporarilyUnavailableMembers}}\n              </td>\n            </tr>\n  \n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\" style=\"background-color:#e9e6e6\">\n      <div class=\"row\">\n        <div class=\"col-11 mx-auto mt-1 text-white text-center pt-1 pb-2 mx-2 rounded font-weight-bold\"\n          style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS</div>\n        <div class=\"col-lg-12 pt-2\">\n          <div class=\"accordion\" id=\"accordion1\">\n            <div class=\"card\" *ngFor=\"let teamMembersGroup of TeamMembers; let i = index\">\n  \n  \n              <div class=\"card-header bg-secondary\" id=\"card1\">\n                <h2 class=\"mb-0\">\n                  <button class=\"btn btn-link text-white\" type=\"button\" data-toggle=\"collapse\"\n                    [attr.data-target]=\" '#cardbody' + i \">{{teamMembersGroup.Region}}</button>\n                </h2>\n              </div>\n              <div [id]=\" 'cardbody' + i \" class=\"collapse\" data-parent=\"#accordion1\" [ngClass]=\"(i == 0)? 'show': '' \">\n                <div class=\"card-body\">\n  \n                  <div *ngIf=\"i == 0; then firstTemplate; else secondTemplate\">\n  \n                  </div>\n  \n                  <ng-template #firstTemplate>\n                    <div class=\"card\" *ngFor=\"let member of teamMembersGroup.Members\">\n                      <div class=\"card-header bg-primary text-white\">#{{member.ID}}  {{member.Name}}</div>\n                      <div class=\"card-body\">{{member.Status}}</div>\n                    </div>\n                  </ng-template>\n  \n                  <ng-template #secondTemplate>\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th>ID</th>\n                          <th>Name</th>\n                          <th>Status</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let member of teamMembersGroup.Members\">\n                          <td>{{member.ID}}</td>\n                          <td [style.color]=\" (member.Status == 'Busy')? 'red': 'black' \">{{member.Name}}</td>\n                          <td>{{member.Status}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </ng-template>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMyProfileMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>my-profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>\n  Projects\n  <i class=\"fa fa-circle-o-notch fa-spin\" style=\"font-size:34px\" *ngIf=\"showLoading\"></i>\n</h1>\n<div class=\"row\">\n  <div class=\"col-xl-9 mx-auto\">\n    <div class=\"form-group form-row\">\n\n      <div class=\"col-2\">\n        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\" (click)=\"onNewClick($event)\">\n          Create Project</button>\n      </div>\n\n      <label for=\"drpSearchBy\" class=\"col-form-label col-2 text-right\">Search by:</label>\n\n      <div class=\"col-3\">\n        <select class=\"form-control\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\n          <option value=\"ProjectID\">Project ID</option>\n          <option value=\"ProjectName\">Project Name</option>\n          <option value=\"DateOfStart\">Date of Start</option>\n          <option value=\"TeamSize\">Team Size</option>\n        </select>\n      </div>\n\n      <label for=\"textSearchText\" class=\"col-form-label col-1 text-right\">Search:</label>\n\n      <div class=\"col-4\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" id=\"txtSearchText\" name=\"SearchText\" [(ngModel)]=\"searchText\">\n          <div class=\"input-group-append\" (click)=\"onSearchClick()\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-xl-9 mx-auto\">\n    <table class=\"table\">\n      <thead>\n        <th>Project ID</th>\n        <th>Project Name</th>\n        <th>Date of Start</th>\n        <th>Team Size</th>\n        <th>Client Location</th>\n        <th>Status</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of projects; let i = index\" [ngClass]=\"{ 'text-muted': !project.active}\">\n          <td>{{project.projectID}}</td>\n          <td>{{project.projectName}}</td>\n          <td>{{project.dateOfStart}}</td>\n          <td>{{project.teamSize}}</td>\n          <td>{{project.clientLocation.clientLocationName}}</td>\n          <td>{{project.status}}</td>\n          <td>\n            <button class=\"btn btn-info\" (click)=\"onEditClick($event, i)\" data-toggle=\"modal\" data-target=\"#editModal\">\n              Edit</button>&nbsp;\n            <button class=\"btn btn-warning\" (click)=\"onDeleteClick($event, i)\" data-toggle=\"modal\" data-target=\"#deleteModal\">\n              Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<!---New Project--->\n<form #newForm=\"ngForm\" novalidate=\"novalidate\" appClientLocationStatusValidator>\n  <div class=\"modal\" role=\"dialog\" id=\"newModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header bg-primary text-white\">\n          <div class=\"modal-title\">New Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectID\" style=\"width:130px\" class=\"form-control\" placeholder=\"Project ID\" \n              name=\"ProjectID\" [(ngModel)]=\"newProject.projectID\" required=\"required\" pattern=\"^[0-9]*$\" \n              appProjectIDUniqueValidator #newProjectID=\"ngModel\" [ngClass]=\"{ 'is-invalid': newProjectID.invalid && \n              (newProjectID.dirty || newProjectID.touched || newForm.submitted), 'is-valid': newProjectID.valid && \n              (newProjectID.dirty || newProjectID.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || \n              newForm.submitted) && newProjectID.errors?.required\">Project ID can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || \n              newForm.submitted) && newProjectID.errors?.pattern\">Project ID should contain numbers only</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || \n              newForm.submitted) && newProjectID.errors?.uniqueProjectID\">Duplicate Project ID</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" placeholder=\"Project Name\" name=\"ProjectName\" \n              [(ngModel)]=\"newProject.projectName\" required=\"required\" minlength=\"3\" maxlength=\"30\" pattern=\"^[A-Za-z0-9 /-]*$\" \n              #newProjectName=\"ngModel\" [ngClass]=\"{ 'is-invalid': newProjectName.invalid && (newProjectName.dirty || \n              newProjectName.touched || newForm.submitted), 'is-valid': newProjectName.valid && (newProjectName.dirty || \n              newProjectName.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || \n              newForm.submitted) && newProjectName.errors?.required\">Project Name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || \n              newForm.submitted) && newProjectName.errors?.pattern\">\n              Project Name can contain alphabets, digits, dot, hyphen or space only</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || \n              newForm.submitted) && newProjectName.errors?.minlength\">Project name should be at least 3 characters long</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:180px\" class=\"form-control\" placeholder=\"Date of Start\" \n              name=\"DateOfStart\" [(ngModel)]=\"newProject.dateOfStart\" required=\"required\" #newDateOfStart=\"ngModel\" \n              [ngClass]=\"{ 'is-invalid': newDateOfStart.invalid && (newDateOfStart.dirty || newDateOfStart.touched || \n              newForm.submitted), 'is-valid': newDateOfStart.valid && (newDateOfStart.dirty || newDateOfStart.touched || \n              newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newDateOfStart.invalid && (newDateOfStart.dirty || newDateOfStart.touched || \n              newForm.submitted) && newDateOfStart.errors?.required\">Date of Start can't be blank</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\" \n              name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\" pattern=\"^[0-9]*$\" maxlength=\"7\" \n              appTeamSizeValidator=\"5\" #newTeamSize=\"ngModel\" [ngClass]=\"{ 'is-invalid': newTeamSize.invalid && \n              (newTeamSize.dirty || newTeamSize.touched || newForm.submitted), 'is-valid': newTeamSize.valid && \n              (newTeamSize.dirty || newTeamSize.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newTeamSize.invalid && (newTeamSize.dirty || newTeamSize.touched || \n              newForm.submitted) && newTeamSize.errors?.required\">Team Size should be a number</span>\n\n              <span class=\"text-danger\" *ngIf=\"newTeamSize.invalid && (newTeamSize.dirty || newTeamSize.touched || \n              newForm.submitted) && newTeamSize.errors?.divisible\">Team Size should be divisble by 5</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"col-sm-4 col-form-label\">&nbsp;</label>\n            <div class=\"col-sm-8\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" id=\"chkNewActive\" value=\"true\" class=\"form-check-input\" \n                [(ngModel)]=\"newProject.active\" name=\"active\">\n                <label class=\"form-check-label\" for=\"chkNewActive\">Active</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"rbNewStatusInForce\" class=\"col-sm-4\">Status</label>\n            <div class=\"col-sm-8\">\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbNewStatusInForce\" value=\"In Force\" class=\"form-check-input\" name=\"Status\" \n                [(ngModel)]=\"newProject.status\" required=\"required\" #newStatusInForce=\"ngModel\">\n                <label for=\"rbNewStatusInForce\" class=\"form-check-label\">In Force</label>\n              </div>\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbNewStatusSupport\" value=\"Support\" class=\"form-check-input\" name=\"Status\" \n                [(ngModel)]=\"newProject.status\" required=\"required\" #newStatusSupport=\"ngModel\">\n                <label for=\"rbNewStatusSupport\" class=\"form-check-label\">Support</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"newStatusInForce.invalid && (newStatusInForce.dirty || newStatusInForce.touched || \n              newForm.submitted) && newStatusInForce.errors?.required\">Please select status</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"drpNewClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n            <div class=\"col-sm-8\">\n              <select id=\"drpNewClientLocation\" class=\"form-control\" name=\"ClientLocation\" [(ngModel)]=\"newProject.clientLocationID\" \n              required=\"required\" #newClientLocationID=\"ngModel\" [ngClass]=\"{ 'is-invalid': newClientLocationID.invalid && \n              (newClientLocationID.dirty || newClientLocationID.touched || newForm.submitted), 'is-valid': newClientLocationID.valid && \n              (newClientLocationID.dirty || newClientLocationID.touched || newForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.clientLocationID\">\n                  {{clientLocation.clientLocationName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"newClientLocationID.invalid && (newClientLocationID.dirty || newClientLocationID.touched \n              || newForm.submitted) && newClientLocationID.errors?.required\">Please client location</span>\n\n              <span class=\"text-danger\" *ngIf=\"newForm.invalid && (newForm.dirty || newForm.touched || newForm.submitted) \n              && newForm.errors?.clientLocationStatus\">Support projects are not allowed at Tokyo</span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\" id=\"newFormCancel\">Cancel</button>\n          <button class=\"btn btn-success\" (click)=\"onSaveClick()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<!-- Edit Project -->\n<form #editForm=\"ngForm\" novalidate=\"novalidate\" appClientLocationStatusValidator>\n  <div class=\"modal\" role=\"dialog\" id=\"editModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Edit Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectID\" style=\"width:130px\" class=\"form-control-plain-text\" placeholder=\"Project ID\" \n              name=\"ProjectID\" [(ngModel)]=\"editProject.projectID\" disabled=\"disabled\" required=\"required\" pattern=\"^[0-9]*$\" \n              appProjectIDUniqueValidator #editProjectID=\"ngModel\" [ngClass]=\"{ 'is-invalid': editProjectID.invalid && \n              (editProjectID.dirty || editProjectID.touched || newForm.submitted), 'is-valid': editProjectID.valid && \n              (editProjectID.dirty || editProjectID.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || \n              editForm.submitted) && editProjectID.errors?.required\">Project ID can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || \n              editForm.submitted) && editProjectID.errors?.pattern\">Project ID should contain numbers only</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || \n              editForm.submitted) && editProjectID.errors?.uniqueProjectID\">Duplicate Project ID</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" placeholder=\"Project Name\" name=\"ProjectName\" \n              [(ngModel)]=\"editProject.projectName\" required=\"required\" minlength=\"3\" maxlength=\"30\" pattern=\"^[A-Za-z0-9 /-]*$\" \n              #editProjectName=\"ngModel\" [ngClass]=\"{ 'is-invalid': editProjectName.invalid && \n              (editProjectName.dirty || editProjectName.touched || editForm.submitted), 'is-valid': editProjectName.valid && \n              (editProjectName.dirty || editProjectName.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || \n              editForm.submitted) && editProjectName.errors?.required\">Project Name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || \n              editForm.submitted) && editProjectName.errors?.pattern\">\n              Project Name can contain alphabets, digits, dot, hyphen or space only</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || \n              editForm.submitted) && editProjectName.errors?.minlength\">Project name should be at least 3 characters long</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtEditDateOfStart\" style=\"width:180px\" class=\"form-control\" placeholder=\"Date of Start\" \n              name=\"DateOfStart\" [(ngModel)]=\"editProject.dateOfStart\" required=\"required\" #editDateOfStart=\"ngModel\" \n              [ngClass]=\"{ 'is-invalid': editDateOfStart.invalid && \n              (editDateOfStart.dirty || editDateOfStart.touched || editForm.submitted), 'is-valid': editDateOfStart.valid && \n              (editDateOfStart.dirty || editDateOfStart.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editDateOfStart.invalid && (editForm.submitted) && editDateOfStart.errors?.required\">\n                Date of Start can't be blank</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\" \n              name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\" pattern=\"^[0-9]*$\" maxlength=\"7\" appTeamSizeValidator=\"5\" \n              #editTeamSize=\"ngModel\" [ngClass]=\"{ 'is-invalid': editTeamSize.invalid && \n              (editTeamSize.dirty || editTeamSize.touched || editForm.submitted), 'is-valid': editTeamSize.valid && \n              (editTeamSize.dirty || editTeamSize.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editTeamSize.invalid && (editTeamSize.dirty || editTeamSize.touched || \n              editForm.submitted) && editTeamSize.errors?.required\">Team Size should be a number</span>\n\n              <span class=\"text-danger\" *ngIf=\"editTeamSize.invalid && (editTeamSize.dirty || editTeamSize.touched || \n              editForm.submitted) && editTeamSize.errors?.divisible\">Team Size should be divisble by 5</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"col-sm-4 col-form-label\">&nbsp;</label>\n            <div class=\"col-sm-8\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" id=\"chkEditActive\" value=\"true\" class=\"form-check-input\" \n                [(ngModel)]=\"editProject.active\" name=\"active\">\n                <label class=\"form-check-label\" for=\"chkEditActive\">Active</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"rbEditStatusInForce\" class=\"col-sm-4\">Status</label>\n            <div class=\"col-sm-8\">\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbEditStatusInForce\" value=\"In Force\" class=\"form-check-input\" name=\"Status\" \n                [(ngModel)]=\"editProject.status\" required=\"required\" #editStatusInForce=\"ngModel\">\n                <label for=\"rbEditStatusInForce\" class=\"form-check-label\">In Force</label>\n              </div>\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbEditStatusSupport\" value=\"Support\" class=\"form-check-input\" name=\"Status\" \n                [(ngModel)]=\"editProject.status\" required=\"required\" #editStatusSupport=\"ngModel\">\n                <label for=\"rbEditStatusSupport\" class=\"form-check-label\">Support</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"editStatusInForce.invalid && (editStatusInForce.dirty || editStatusInForce.touched || \n              editForm.submitted) && editStatusInForce.errors?.required\">Please select status</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"drpEditClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n            <div class=\"col-sm-8\">\n              <select id=\"drpEditClientLocation\" class=\"form-control\" name=\"ClientLocation\" [(ngModel)]=\"editProject.clientLocationID\" \n              required=\"required\" #editClientLocationID=\"ngModel\" [ngClass]=\"{ 'is-invalid': editClientLocationID.invalid && \n              (editClientLocationID.dirty || editClientLocationID.touched || editForm.submitted), 'is-valid': editClientLocationID.valid \n              && (editClientLocationID.dirty || editClientLocationID.touched || editForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.clientLocationID\">\n                  {{clientLocation.clientLocationName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"editClientLocationID.invalid && (editClientLocationID.dirty || \n              editClientLocationID.touched || editForm.submitted) && editClientLocationID.errors?.required\">Please client location</span>\n\n              <span class=\"text-danger\" *ngIf=\"editForm.invalid && (editForm.dirty || editForm.touched || editForm.submitted) \n              && editForm.errors?.clientLocationStatus\">Support projects are not allowed at Tokyo</span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\" id=\"editFormCancel\">Cancel</button>\n          <button class=\"btn btn-success\" (click)=\"onUpdateClick()\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n\n<!-- Delete Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Delete Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"text-warning\">Are you sure to delete this Project?</div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectID\" style=\"width:100px\" class=\"form-control-plain-text\" placeholder=\"Project ID\" \n              name=\"ProjectID\" [(ngModel)]=\"deleteProject.projectID\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control-plain-text\" placeholder=\"Project Name\" \n              name=\"ProjectName\" [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Angular Task Manager\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mynav\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\">{{loginService.currentUserName}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n                <a class=\"nav-link\" routerLink=\"login\">Login</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n                <a class=\"nav-link\" routerLink=\"signup\">Sign Up</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-xl-5 col-md-9 mx-auto\">\n        <div class=\"card mt-4\">\n          <div class=\"card-header bg-secondary text-white\">\n            <h3>Login</h3>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group form-row\">\n              <label for=\"UserName\" class=\"col-md-4 col-form-label\">Username</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginViewModel.UserName\" name=\"UserName\" autofocus=\"autofocus\">\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"Password\" class=\"col-md-4 col-form-label\">Password</label>\n              <div class=\"col-md-8\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginViewModel.Password\" name=\"Password\">\n              </div>\n            </div>\n  \n          </div>\n  \n          <div class=\"card-footer text-right\">\n            <span class=\"text-danger\">{{loginError}}&nbsp;</span>\n            <button class=\"btn btn-primary\" (click)=\"onLoginClick($event)\">Login</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-8 col-xl-6 mx-auto\">\n  \n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmitClick()\">\n  \n        <div class=\"card mt-1\">\n          <div class=\"card-header\">\n            <h4>Sign Up</h4>\n          </div>\n  \n          <div class=\"card-body\">\n  \n            <div class=\"form-group form-row\" formGroupName=\"personName\">\n              <label for=\"firstName\" class=\"col-md-4 col-form-label\">First Name:</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('personName.firstName').valid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.required\">First name can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.minlength\">First name should contain at least 2 characters</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\" formGroupName=\"personName\">\n              <label for=\"lastName\" class=\"col-md-4 col-form-label\">Last Name:</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('personName.lastName').valid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.required\">Last name can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.minlength\">Last name should contain at least 2 characters</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"email\" class=\"col-md-4 col-form-label\">Email:</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('email').valid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.required\">Email can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.email\">Email is invalid</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"mobile\" class=\"col-md-4 col-form-label\">Mobile:</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile\" class=\"form-control\" formControlName=\"mobile\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('mobile').valid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.required\">Mobile can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.pattern\">Mobile is invalid</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"dateOfBirth\" class=\"col-md-4 col-form-label\">Date of Birth:</label>\n              <div class=\"col-md-8\">\n                <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\" formControlName=\"dateOfBirth\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('dateOfBirth').valid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.required\">Date of Birth can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.minAge\">Minimum Age must be 18</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"password\" class=\"col-md-4 col-form-label\">Password:</label>\n              <div class=\"col-md-8\">\n                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('password').valid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) && signUpForm.get('password').errors?.required\">Password can't be blank</span>\n              </div>\n            </div>\n  \n  \n            <div class=\"form-group form-row\">\n              <label for=\"confirmPassword\" class=\"col-md-4 col-form-label\">Confirm Password:</label>\n              <div class=\"col-md-8\">\n                <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('confirmPassword').valid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) }\">\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) && signUpForm.get('confirmPassword').errors?.required\">Confirm Password can't be blank</span>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.invalid && (signUpForm.dirty || signUpForm.touched || signUpForm.submitted) && signUpForm.errors?.compareValidator\">Password and Confirm Password do not match</span>\n              </div>\n            </div>\n  \n  \n            <div class=\"form-group form-row\">\n              <label class=\"col-md-4 col-form-label\">Gender:</label>\n              <div class=\"col-md-8\">\n  \n                <div class=\"form-check-label form-check-inline\" *ngFor=\"let gender of genders\">\n                  <input type=\"radio\" name=\"gender\" [id]=\"gender\" [value]=\"gender\" class=\"form-check-input\" formControlName=\"gender\">\n                  <label [for]=\"gender\" class=\"form-check-label\">{{gender}}</label>\n                </div>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('gender').invalid && (signUpForm.get('gender').dirty || signUpForm.get('gender').touched || signUpForm.submitted) && signUpForm.get('gender').errors?.required\">Please select gender</span>\n  \n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label for=\"countryID\" class=\"col-md-4 col-form-label\">Country:</label>\n              <div class=\"col-md-8\">\n                <select name=\"countryID\" id=\"countryID\" class=\"form-control\" formControlName=\"countryID\" [ngClass]=\"{\n                  'is-invalid': signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted),\n  \n                  'is-valid': signUpForm.get('countryID').valid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) }\">\n                  <option value=\"null\">Please Select</option>\n                  <option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                    {{country.countryName}}\n                  </option>\n                </select>\n  \n                <span class=\"text-danger\" *ngIf=\"signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) && signUpForm.get('countryID').errors?.required\">Please select country</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label class=\"col-md-4 col-form-label\"></label>\n              <div class=\"col-md-8\">\n                <input type=\"checkbox\" name=\"receiveNewsLetters\" id=\"receiveNewsLetters\" value=\"true\" class=\"form-check-input\" formControlName=\"receiveNewsLetters\">\n                <label for=\"receiveNewsLetters\" class=\"form-check-label\">Receive News Letters</label>\n              </div>\n            </div>\n  \n            <div class=\"form-group form-row\">\n              <label class=\"col-md-4 col-form-label\">Skills:</label>\n              <div class=\"col-md-8\" formArrayName=\"skills\">\n                <div class=\"row\" *ngFor=\"let skill of signUpForm.get('skills').controls; let i = index\" [formGroupName]=\"i\">\n  \n                  <div class=\"col-5\">\n                    <input type=\"text\" name=\"skillName\" id=\"skillName\" placeholder=\"Skill Name\" formControlName=\"skillName\" class=\"form-control\" [ngClass]=\"{\n                      'is-invalid': skill.get('skillName').invalid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted),\n      \n                      'is-valid': skill.get('skillName').valid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted) }\">\n                  </div>\n  \n                  <div class=\"col-4\">\n                    <select name=\"level\" id=\"level\" formControlName=\"level\" class=\"form-control\" [ngClass]=\"{\n                      'is-invalid': skill.get('level').invalid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted),\n      \n                      'is-valid': skill.get('level').valid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted) }\">\n                      <option value=\"null\">Please Select</option>\n                      <option value=\"Beginner\">Beginner</option>\n                      <option value=\"Intermediate\">Intermediate</option>\n                      <option value=\"Professional\">Professional</option>\n                      <option value=\"Expert\">Expert</option>\n                    </select>\n                  </div>\n  \n                  <div class=\"col-3\">\n                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"onRemoveClick(i)\">Remove</button>\n                  </div>\n                </div>\n  \n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddSkill()\">Add Skill</button>\n              </div>\n  \n            </div>\n  \n            <!-- {{signUpForm.value | json}} -->\n          </div>\n  \n          <div class=\"card-footer\">\n            <button class=\"btn btn-success float-right\">Create Account</button>\n            <div class=\"text-danger\">{{registerError}}</div>\n          </div>\n  \n        </div>\n  \n      </form>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasksTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>tasks works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/about/about.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/admin/about/about.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAdminAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/admin/about/about.component.scss")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/admin/my-profile/my-profile.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/admin/about/about.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/admin/projects/projects.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../team-size-validator.directive */
    "./src/app/team-size-validator.directive.ts");
    /* harmony import */


    var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../client-location-status-validator.directive */
    "./src/app/client-location-status-validator.directive.ts");
    /* harmony import */


    var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../project-idunique-validator.directive */
    "./src/app/project-idunique-validator.directive.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"], _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"], _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]],
      providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../dashboard.service */
    "./src/app/dashboard.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Designation = "Team Leader";
          this.Username = "Scott Smith";
          this.NoOfTeamMembers = 67;
          this.TotalCostOfAllProjects = 240;
          this.PendingTasks = 15;
          this.UpComingProjects = 0.2;
          this.ProjectCost = 2113507;
          this.CurrentExpenditure = 96788;
          this.AvailableFunds = 52536;
          this.ToDay = new Date();
          this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
          this.Projects = ["Project A", "Project B", "Project C", "Project D"];

          for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
          }

          this.TeamMembersSummary = this.dashboardService.getTeamMembersSummery();
          this.TeamMembers = [{
            Region: "East",
            Members: [{
              ID: 1,
              Name: "Ford",
              Status: "Available"
            }, {
              ID: 2,
              Name: "Miller",
              Status: "Available"
            }, {
              ID: 3,
              Name: "Jones",
              Status: "Busy"
            }, {
              ID: 4,
              Name: "James",
              Status: "Busy"
            }]
          }, {
            Region: "West",
            Members: [{
              ID: 5,
              Name: "Anna",
              Status: "Available"
            }, {
              ID: 6,
              Name: "Arun",
              Status: "Available"
            }, {
              ID: 7,
              Name: "Varun",
              Status: "Busy"
            }, {
              ID: 8,
              Name: "Jasmine",
              Status: "Busy"
            }]
          }, {
            Region: "South",
            Members: [{
              ID: 9,
              Name: "Krishna",
              Status: "Available"
            }, {
              ID: 10,
              Name: "Mohan",
              Status: "Available"
            }, {
              ID: 11,
              Name: "Raju",
              Status: "Busy"
            }, {
              ID: 12,
              Name: "Farooq",
              Status: "Busy"
            }]
          }, {
            Region: "North",
            Members: [{
              ID: 13,
              Name: "Jacob",
              Status: "Available"
            }, {
              ID: 14,
              Name: "Smith",
              Status: "Available"
            }, {
              ID: 15,
              Name: "Jones",
              Status: "Busy"
            }, {
              ID: 16,
              Name: "James",
              Status: "Busy"
            }]
          }];
        }
      }, {
        key: "onProjectChange",
        value: function onProjectChange($event) {
          if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
          } else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
          } else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
          } else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/admin/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/my-profile/my-profile.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/my-profile/my-profile.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMyProfileMyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/my-profile/my-profile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppAdminMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent() {
        _classCallCheck(this, MyProfileComponent);
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.component.scss */
      "./src/app/admin/my-profile/my-profile.component.scss")).default]
    })], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/admin/projects/projects.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/admin/projects/projects.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/projects/projects.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/projects/projects.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppAdminProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../projects.service */
    "./src/app/projects.service.ts");
    /* harmony import */


    var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../project */
    "./src/app/project.ts");
    /* harmony import */


    var _client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../client-locations.service */
    "./src/app/client-locations.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(projectsService, clientLocationsService) {
        _classCallCheck(this, ProjectsComponent);

        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.projects = [];
        this.clientLocations = [];
        this.showLoading = true;
        this.newProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editIndex = null;
        this.deleteProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
            _this.showLoading = false;
          });
          this.clientLocationsService.getClientLocations().subscribe(function (response) {
            _this.clientLocations = response;
          });
        }
      }, {
        key: "onNewClick",
        value: function onNewClick(event) {
          this.newForm.resetForm();
        }
      }, {
        key: "onSaveClick",
        value: function onSaveClick() {
          var _this2 = this;

          if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.projectsService.insertProject(this.newProject).subscribe(function (response) {
              //Add Project to Grid
              var p = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
              p.projectID = response.projectID;
              p.projectName = response.projectName;
              p.dateOfStart = response.dateOfStart;
              p.teamSize = response.teamSize;
              p.clientLocation = response.clientLocation;
              p.active = response.active;
              p.clientLocationID = response.clientLocationID;
              p.status = response.status;

              _this2.projects.push(p); //Clear New Project Dialog - TextBoxes


              _this2.newProject.projectID = null;
              _this2.newProject.projectName = null;
              _this2.newProject.dateOfStart = null;
              _this2.newProject.teamSize = null;
              _this2.newProject.active = false;
              _this2.newProject.clientLocationID = null;
              _this2.newProject.status = null;
              jquery__WEBPACK_IMPORTED_MODULE_5__("#newFormCancel").trigger("click");
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "onEditClick",
        value: function onEditClick(event, index) {
          var _this3 = this;

          this.editForm.resetForm();
          setTimeout(function () {
            _this3.editProject.projectID = _this3.projects[index].projectID;
            _this3.editProject.projectName = _this3.projects[index].projectName;
            _this3.editProject.dateOfStart = _this3.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd

            _this3.editProject.teamSize = _this3.projects[index].teamSize;
            _this3.editProject.active = _this3.projects[index].active;
            _this3.editProject.clientLocationID = _this3.projects[index].clientLocationID;
            _this3.editProject.clientLocation = _this3.projects[index].clientLocation;
            _this3.editProject.status = _this3.projects[index].status;
            _this3.editIndex = index;
          }, 100);
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick() {
          var _this4 = this;

          if (this.editForm.valid) {
            this.projectsService.updateProject(this.editProject).subscribe(function (response) {
              var p = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
              p.projectID = response.projectID;
              p.projectName = response.projectName;
              p.dateOfStart = response.dateOfStart;
              p.teamSize = response.teamSize;
              p.clientLocation = response.clientLocation;
              p.active = response.active;
              p.clientLocationID = response.clientLocationID;
              p.status = response.status;
              _this4.projects[_this4.editIndex] = p;
              _this4.editProject.projectID = null;
              _this4.editProject.projectName = null;
              _this4.editProject.dateOfStart = null;
              _this4.editProject.teamSize = null;
              _this4.newProject.active = false;
              _this4.newProject.clientLocationID = null;
              _this4.newProject.status = null;
              jquery__WEBPACK_IMPORTED_MODULE_5__("#editFormCancel").trigger("click");
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(event, index) {
          this.deleteIndex = index;
          this.deleteProject.projectID = this.projects[index].projectID;
          this.deleteProject.projectName = this.projects[index].projectName;
          this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
          this.deleteProject.teamSize = this.projects[index].teamSize;
        }
      }, {
        key: "onDeleteConfirmClick",
        value: function onDeleteConfirmClick() {
          var _this5 = this;

          this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(function (response) {
            _this5.projects.splice(_this5.deleteIndex, 1);

            _this5.deleteProject.projectID = null;
            _this5.deleteProject.projectName = null;
            _this5.deleteProject.teamSize = null;
            _this5.deleteProject.dateOfStart = null;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          var _this6 = this;

          this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(function (response) {
            _this6.projects = response;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }, {
        type: _client_locations_service__WEBPACK_IMPORTED_MODULE_4__["ClientLocationsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newForm", {
      static: false
    })], ProjectsComponent.prototype, "newForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editForm", {
      static: false
    })], ProjectsComponent.prototype, "editForm", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/admin/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/about/about.component */
    "./src/app/admin/about/about.component.ts");
    /* harmony import */


    var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/projects/projects.component */
    "./src/app/admin/projects/projects.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./can-activate-guard.service */
    "./src/app/can-activate-guard.service.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/tasks/tasks.component.ts");

    var routes = [{
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: "signup",
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]
    }, {
      path: "dashboard",
      component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]],
      data: {
        expectedRole: "Admin"
      }
    }, {
      path: "about",
      component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: "projects",
      component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
      canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]],
      data: {
        expectedRole: "Admin"
      }
    }, {
      path: "tasks",
      component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"],
      canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]],
      data: {
        expectedRole: "Employee"
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(loginService) {
        _classCallCheck(this, AppComponent);

        this.loginService = loginService;
      }

      _createClass(AppComponent, [{
        key: "onSearchClick",
        value: function onSearchClick() {
          console.log(this.loginService.currentUserName);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./jwt-interceptor.service */
    "./src/app/jwt-interceptor.service.ts");
    /* harmony import */


    var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./jwt-un-authorized-interceptor.service */
    "./src/app/jwt-un-authorized-interceptor.service.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/tasks/tasks.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
        config: {
          tokenGetter: function tokenGetter() {
            return sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
          }
        }
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptorService"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["JwtUnAuthorizedInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/can-activate-guard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/can-activate-guard.service.ts ***!
    \***********************************************/

  /*! exports provided: CanActivateGuardService */

  /***/
  function srcAppCanActivateGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function () {
      return CanActivateGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");

    var CanActivateGuardService =
    /*#__PURE__*/
    function () {
      function CanActivateGuardService(loginService, router, jwtHelperService) {
        _classCallCheck(this, CanActivateGuardService);

        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
      }

      _createClass(CanActivateGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          //console.log(this.router.url);
          var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;

          if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role == route.data.expectedRole) {
            return true; //the user can navigate to the particular route
          } else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
          }
        }
      }]);

      return CanActivateGuardService;
    }();

    CanActivateGuardService.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }];
    };

    CanActivateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanActivateGuardService);
    /***/
  },

  /***/
  "./src/app/client-location-status-validator.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/client-location-status-validator.directive.ts ***!
    \***************************************************************/

  /*! exports provided: ClientLocationStatusValidatorDirective */

  /***/
  function srcAppClientLocationStatusValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientLocationStatusValidatorDirective", function () {
      return ClientLocationStatusValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ClientLocationStatusValidatorDirective_1;

    var ClientLocationStatusValidatorDirective = ClientLocationStatusValidatorDirective_1 =
    /*#__PURE__*/
    function () {
      function ClientLocationStatusValidatorDirective() {
        _classCallCheck(this, ClientLocationStatusValidatorDirective);
      }

      _createClass(ClientLocationStatusValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var isValid = true;

          if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
            isValid = false; //indicates invalid
          }

          if (isValid == true) {
            return null; //valid
          } else {
            return {
              clientLocationStatus: {
                valid: false
              }
            }; //invalid
          }
        }
      }]);

      return ClientLocationStatusValidatorDirective;
    }();

    ClientLocationStatusValidatorDirective = ClientLocationStatusValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appClientLocationStatusValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: ClientLocationStatusValidatorDirective_1,
        multi: true
      }]
    })], ClientLocationStatusValidatorDirective);
    /***/
  },

  /***/
  "./src/app/client-location.ts":
  /*!************************************!*\
    !*** ./src/app/client-location.ts ***!
    \************************************/

  /*! exports provided: ClientLocation */

  /***/
  function srcAppClientLocationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientLocation", function () {
      return ClientLocation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ClientLocation = function ClientLocation() {
      _classCallCheck(this, ClientLocation);

      this.clientLocationID = null;
      this.clientLocationName = null;
    };
    /***/

  },

  /***/
  "./src/app/client-locations.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/client-locations.service.ts ***!
    \*********************************************/

  /*! exports provided: ClientLocationsService */

  /***/
  function srcAppClientLocationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientLocationsService", function () {
      return ClientLocationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ClientLocationsService =
    /*#__PURE__*/
    function () {
      function ClientLocationsService(httpClient) {
        _classCallCheck(this, ClientLocationsService);

        this.httpClient = httpClient;
      }

      _createClass(ClientLocationsService, [{
        key: "getClientLocations",
        value: function getClientLocations() {
          return this.httpClient.get("/api/clientlocations", {
            responseType: "json"
          });
        }
      }]);

      return ClientLocationsService;
    }();

    ClientLocationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ClientLocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClientLocationsService);
    /***/
  },

  /***/
  "./src/app/countries.service.ts":
  /*!**************************************!*\
    !*** ./src/app/countries.service.ts ***!
    \**************************************/

  /*! exports provided: CountriesService */

  /***/
  function srcAppCountriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
      return CountriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CountriesService =
    /*#__PURE__*/
    function () {
      function CountriesService(httpClient) {
        _classCallCheck(this, CountriesService);

        this.httpClient = httpClient;
      }

      _createClass(CountriesService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.httpClient.get("/api/countries", {
            responseType: "json"
          });
        }
      }]);

      return CountriesService;
    }();

    CountriesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CountriesService);
    /***/
  },

  /***/
  "./src/app/custom-validators.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/custom-validators.service.ts ***!
    \**********************************************/

  /*! exports provided: CustomValidatorsService */

  /***/
  function srcAppCustomValidatorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function () {
      return CustomValidatorsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomValidatorsService =
    /*#__PURE__*/
    function () {
      function CustomValidatorsService() {
        _classCallCheck(this, CustomValidatorsService);
      }

      _createClass(CustomValidatorsService, [{
        key: "minimumAgeValidator",
        value: function minimumAgeValidator(minAge) {
          return function (control) {
            if (!control.value) {
              return null;
            }

            var today = new Date();
            var dateOfBirth = new Date(control.value);
            var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
            var diffYears = diffMilliSeconds / (1000 * 60 * 60 * 24) / 365.25;

            if (diffYears >= minAge) {
              return null;
            } else {
              return {
                minAge: {
                  valid: false
                }
              };
            }
          };
        }
      }, {
        key: "compareValidator",
        value: function compareValidator(controlToValidate, controlToCompare) {
          return function (formGroup) {
            if (!formGroup.get(controlToValidate).value) {
              return null;
            }

            if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value) {
              return null;
            } else {
              formGroup.get(controlToValidate).setErrors({
                compareValidator: {
                  valid: false
                }
              });
              return {
                compareValidator: {
                  valid: false
                }
              };
            }
          };
        }
      }]);

      return CustomValidatorsService;
    }();

    CustomValidatorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomValidatorsService);
    /***/
  },

  /***/
  "./src/app/dashboard.service.ts":
  /*!**************************************!*\
    !*** ./src/app/dashboard.service.ts ***!
    \**************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardService =
    /*#__PURE__*/
    function () {
      function DashboardService() {
        _classCallCheck(this, DashboardService);
      }

      _createClass(DashboardService, [{
        key: "getTeamMembersSummery",
        value: function getTeamMembersSummery() {
          var TeamMembersSummary = [{
            Region: "East",
            TeamMembersCount: 20,
            TemporarilyUnavailableMembers: 4
          }, {
            Region: "West",
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 8
          }, {
            Region: "South",
            TeamMembersCount: 17,
            TemporarilyUnavailableMembers: 1
          }, {
            Region: "North",
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 6
          }];
          return TeamMembersSummary;
        }
      }]);

      return DashboardService;
    }();

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardService);
    /***/
  },

  /***/
  "./src/app/jwt-interceptor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/jwt-interceptor.service.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptorService */

  /***/
  function srcAppJwtInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function () {
      return JwtInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JwtInterceptorService =
    /*#__PURE__*/
    function () {
      function JwtInterceptorService() {
        _classCallCheck(this, JwtInterceptorService);
      }

      _createClass(JwtInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentUser = {
            token: ""
          };

          if (sessionStorage.currentUser != null) {
            currentUser = JSON.parse(sessionStorage.currentUser);
          }

          request = request.clone({
            setHeaders: {
              Authorization: "Bearer " + currentUser.token
            }
          });
          return next.handle(request);
        }
      }]);

      return JwtInterceptorService;
    }();

    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JwtInterceptorService);
    /***/
  },

  /***/
  "./src/app/jwt-un-authorized-interceptor.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
    \**********************************************************/

  /*! exports provided: JwtUnAuthorizedInterceptorService */

  /***/
  function srcAppJwtUnAuthorizedInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function () {
      return JwtUnAuthorizedInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var JwtUnAuthorizedInterceptorService =
    /*#__PURE__*/
    function () {
      function JwtUnAuthorizedInterceptorService() {
        _classCallCheck(this, JwtUnAuthorizedInterceptorService);
      }

      _createClass(JwtUnAuthorizedInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {//do something with response
            }
          }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (error.status == 401) {
                console.log(error);
                alert("401 UnAuthorized");
              }
            }
          }));
        }
      }]);

      return JwtUnAuthorizedInterceptorService;
    }();

    JwtUnAuthorizedInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JwtUnAuthorizedInterceptorService);
    /***/
  },

  /***/
  "./src/app/login-view-model.ts":
  /*!*************************************!*\
    !*** ./src/app/login-view-model.ts ***!
    \*************************************/

  /*! exports provided: LoginViewModel */

  /***/
  function srcAppLoginViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginViewModel", function () {
      return LoginViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LoginViewModel = function LoginViewModel() {
      _classCallCheck(this, LoginViewModel);
    };
    /***/

  },

  /***/
  "./src/app/login.service.ts":
  /*!**********************************!*\
    !*** ./src/app/login.service.ts ***!
    \**********************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(httpBackend, jwtHelperService) {
        _classCallCheck(this, LoginService);

        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.currentUserName = null;
      }

      _createClass(LoginService, [{
        key: "Login",
        value: function Login(loginViewModel) {
          var _this7 = this;

          this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
          return this.httpClient.post("/authenticate", loginViewModel, {
            responseType: "json"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
              _this7.currentUserName = user.userName;
              sessionStorage.currentUser = JSON.stringify(user);
            }

            return user;
          }));
        }
      }, {
        key: "Register",
        value: function Register(signUpViewModel) {
          var _this8 = this;

          this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
          return this.httpClient.post("/register", signUpViewModel, {
            responseType: "json"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
              _this8.currentUserName = user.userName;
              sessionStorage.currentUser = JSON.stringify(user);
            }

            return user;
          }));
        }
      }, {
        key: "Logout",
        value: function Logout() {
          sessionStorage.removeItem("currentUser");
          this.currentUserName = null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;

          if (this.jwtHelperService.isTokenExpired()) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login-view-model */
    "./src/app/login-view-model.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_2__["LoginViewModel"]();
        this.loginError = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginClick",
        value: function onLoginClick(event) {
          var _this9 = this;

          this.loginService.Login(this.loginViewModel).subscribe(function (response) {
            _this9.router.navigateByUrl("/dashboard");
          }, function (error) {
            console.log(error);
            _this9.loginError = "Invalid Username or Password";
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/project-idunique-validator.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/project-idunique-validator.directive.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectIDUniqueValidatorDirective */

  /***/
  function srcAppProjectIduniqueValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function () {
      return ProjectIDUniqueValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects.service */
    "./src/app/projects.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProjectIDUniqueValidatorDirective_1;

    var ProjectIDUniqueValidatorDirective = ProjectIDUniqueValidatorDirective_1 =
    /*#__PURE__*/
    function () {
      function ProjectIDUniqueValidatorDirective(projectsService) {
        _classCallCheck(this, ProjectIDUniqueValidatorDirective);

        this.projectsService = projectsService;
      }

      _createClass(ProjectIDUniqueValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          return this.projectsService.getProjectByProjectID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (existingProject) {
            if (existingProject != null) {
              return {
                uniqueProjectID: {
                  valid: false
                }
              };
            } else {
              return null;
            }
          }));
        }
      }]);

      return ProjectIDUniqueValidatorDirective;
    }();

    ProjectIDUniqueValidatorDirective.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    ProjectIDUniqueValidatorDirective = ProjectIDUniqueValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appProjectIDUniqueValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"],
        useExisting: ProjectIDUniqueValidatorDirective_1,
        multi: true
      }]
    })], ProjectIDUniqueValidatorDirective);
    /***/
  },

  /***/
  "./src/app/project.ts":
  /*!****************************!*\
    !*** ./src/app/project.ts ***!
    \****************************/

  /*! exports provided: Project */

  /***/
  function srcAppProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _client_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./client-location */
    "./src/app/client-location.ts");

    var Project = function Project() {
      _classCallCheck(this, Project);

      this.projectID = null;
      this.projectName = null;
      this.dateOfStart = null;
      this.teamSize = null;
      this.active = null;
      this.status = null;
      this.clientLocationID = null;
      this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
    };
    /***/

  },

  /***/
  "./src/app/projects.service.ts":
  /*!*************************************!*\
    !*** ./src/app/projects.service.ts ***!
    \*************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProjectsService =
    /*#__PURE__*/
    function () {
      function ProjectsService(httpClient) {
        _classCallCheck(this, ProjectsService);

        this.httpClient = httpClient;
      }

      _createClass(ProjectsService, [{
        key: "getAllProjects",
        value: function getAllProjects() {
          return this.httpClient.get("/api/projects", {
            responseType: "json"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getProjectByProjectID",
        value: function getProjectByProjectID(ProjectID) {
          return this.httpClient.get("/api/projects/searchbyprojectid/" + ProjectID, {
            responseType: "json"
          });
        }
      }, {
        key: "insertProject",
        value: function insertProject(newProject) {
          return this.httpClient.post("/api/projects", newProject, {
            responseType: "json"
          });
        }
      }, {
        key: "updateProject",
        value: function updateProject(existingProject) {
          return this.httpClient.put("/api/projects", existingProject, {
            responseType: "json"
          });
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(ProjectID) {
          return this.httpClient.delete("/api/projects?ProjectID=" + ProjectID);
        }
      }, {
        key: "SearchProjects",
        value: function SearchProjects(searchBy, searchText) {
          return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, {
            responseType: "json"
          });
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectsService);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.scss":
  /*!************************************************!*\
    !*** ./src/app/sign-up/sign-up.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../countries.service */
    "./src/app/countries.service.ts");
    /* harmony import */


    var _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../custom-validators.service */
    "./src/app/custom-validators.service.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(countriesService, formBuilder, customValidatorsService, loginService, router) {
        _classCallCheck(this, SignUpComponent);

        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        this.customValidatorsService = customValidatorsService;
        this.loginService = loginService;
        this.router = router;
        this.genders = ["male", "female"];
        this.countries = [];
        this.registerError = null;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.countriesService.getCountries().subscribe(function (response) {
            _this10.countries = response;
          });
          this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
              firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
              lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
            }),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[789]\d{9}$/)]],
            dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.customValidatorsService.minimumAgeValidator(18)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            receiveNewsLetters: [null],
            skills: this.formBuilder.array([])
          }, {
            validators: [this.customValidatorsService.compareValidator("confirmPassword", "password")]
          });
          this.signUpForm.valueChanges.subscribe(function (value) {});
        }
      }, {
        key: "onSubmitClick",
        value: function onSubmitClick() {
          var _this11 = this;

          this.signUpForm["submitted"] = true;
          console.log(this.signUpForm);

          if (this.signUpForm.valid) {
            var signUpVieModel = this.signUpForm.value;
            this.loginService.Register(signUpVieModel).subscribe(function (response) {
              _this11.router.navigate(["tasks"]);
            }, function (error) {
              console.log(error);
              _this11.registerError = "Unable to submit";
            });
          }
        }
      }, {
        key: "onAddSkill",
        value: function onAddSkill() {
          var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            skillLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.signUpForm.get("skills").push(formGroup);
        }
      }, {
        key: "onRemoveClick",
        value: function onRemoveClick(index) {
          this.signUpForm.get("skills").removeAt(index);
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/sign-up/sign-up.component.scss")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/tasks/tasks.component.scss":
  /*!********************************************!*\
    !*** ./src/app/tasks/tasks.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasksTasksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasks/tasks.component.ts":
  /*!******************************************!*\
    !*** ./src/app/tasks/tasks.component.ts ***!
    \******************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TasksComponent =
    /*#__PURE__*/
    function () {
      function TasksComponent() {
        _classCallCheck(this, TasksComponent);
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TasksComponent;
    }();

    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasks.component.scss */
      "./src/app/tasks/tasks.component.scss")).default]
    })], TasksComponent);
    /***/
  },

  /***/
  "./src/app/team-size-validator.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/team-size-validator.directive.ts ***!
    \**************************************************/

  /*! exports provided: TeamSizeValidatorDirective */

  /***/
  function srcAppTeamSizeValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamSizeValidatorDirective", function () {
      return TeamSizeValidatorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TeamSizeValidatorDirective_1;

    var TeamSizeValidatorDirective = TeamSizeValidatorDirective_1 =
    /*#__PURE__*/
    function () {
      function TeamSizeValidatorDirective() {
        _classCallCheck(this, TeamSizeValidatorDirective);
      }

      _createClass(TeamSizeValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var currentValue = control.value;
          var isValid = currentValue % this.n == 0;

          if (isValid) {
            return null;
          } else {
            return {
              divisible: {
                valid: false
              }
            };
          }
        }
      }]);

      return TeamSizeValidatorDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appTeamSizeValidator")], TeamSizeValidatorDirective.prototype, "n", void 0);
    TeamSizeValidatorDirective = TeamSizeValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTeamSizeValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: TeamSizeValidatorDirective_1,
        multi: true
      }]
    })], TeamSizeValidatorDirective);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular\TaskManager\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map