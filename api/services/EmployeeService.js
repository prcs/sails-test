module.exports = {
    remove: function(next) {
        Employee.destroy().exec(function(err, todo) {
            if(err) throw err;
            next(todo);
        });
    }
}