var Profile = /** @class */ (function () {
    function Profile(name, gender, birthDate, work, education, hometown, siblings, friends) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getSiblings = function () {
            return _this.siblings;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.work = work;
        this.education = education;
        this.hometown = hometown;
        this.siblings = siblings;
        this.friends = friends;
    }
    return Profile;
}());
var object = new Profile("Paryavaran","Male","10 April 1991","IBM","NSVM Ballia","Ballia", 3, 500);
var work_info = object.getWork();
alert(work_info);
