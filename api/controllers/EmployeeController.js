/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	remove: function(req, res) {
        EmployeeService.remove(function(success) {
            res.json(success);
        });
    }
};

