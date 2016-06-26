'use strict';

function Users(){
    this.users = [
        {
            id: 0,
            name: 'admin',
            email: 'admin@mail.com',
            password: '1234'
        },
        {
            id: 1,
            name: 'Jon',
            email: 'jone@mail.com'
        },
        {
            id: 2,
            name: 'Ben',
            email: 'bea@email.com'
        }
    ];
}

Users.prototype.getUserById = function(id){
    var _this = this;
    return new Promise(function(resolve, reject){
        var index =_this._findUserIndex(id);

        if(index != -1){
            resolve(_this.users[index]);
        }else{
            reject('Don`t exist user with this id:' + id)
        }
    });
};

Users.prototype.add = function(newUser){
    newUser.id = this.users.length+1;
    this.users.push(newUser);
    return newUser;
};

Users.prototype.update = function(user){
    var _this = this;

    return new Promise(function(resolve, reject){
        var index =_this._findUserIndex(user.id);

        if(index != -1){
            resolve(_this.users[index] = user);
        }else{
            reject('Don`t exist user with this id:' + id)
        }
    });
};

Users.prototype.delete = function(id){
    var _this = this;
    return new Promise(function(resolve, reject){
        var index = _this._findUserIndex(id);

        if(index != -1){
            _this.users.splice(index,1);
            resolve(_this.users);
        }else{
            reject('Don`t exist user with this id:' + id)
        }
    });
};

Users.prototype.findUserByEmail = function(email){
    return this.users.find(function(user){
        return user.email === email;
    });
};

Users.prototype._findUserIndex = function(id){
    return this.users.findIndex(function(item){
        return item.id == id;
    });
};

module.exports = Users;