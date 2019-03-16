import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatebaseProvider {

 	options: any = {
     	name: 'insc.db',
     	location: 'default',
     	createFromLocation: 1
 	}
    public update_db = 0;
 	public db: SQLiteObject;

 	constructor(private sqlite: SQLite, public storage: Storage) {
     	this.connectToDb();
 	}
 
 	public connectToDb():void {
     	this.sqlite.create(this.options)
         	.then((db: SQLiteObject) => {
            	this.db = db;
                // Create Session Tables ---------------->
                var session_query = 'CREATE TABLE IF NOT EXISTS `tbl_sessions`(`session_id` INT PRIMARY KEY, `session_name` VARCHAR(100) DEFAULT NULL, `title` VARCHAR(500) DEFAULT NULL, `type` INT NOT NULL, `moderator` VARCHAR(1000) DEFAULT NULL, `chairman` VARCHAR(1000) DEFAULT NULL, `start_date` VARCHAR(100) DEFAULT NULL, `start_time` VARCHAR(50) DEFAULT NULL, `end_time` VARCHAR(50) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `status` INT NOT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(session_query, [])
                    .then(() => console.log('Table: tbl_sessions created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                var session_details_query = 'CREATE TABLE IF NOT EXISTS `tbl_session_details`(`topic_id` INT PRIMARY KEY, `topic` VARCHAR(500) DEFAULT NULL, `speakers` VARCHAR(500) DEFAULT NULL, `session_id` VARCHAR(5) DEFAULT NULL, `start_time` VARCHAR(100) DEFAULT NULL, `end_time` VARCHAR(100) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(session_details_query, [])
                    .then(() => console.log('Table: tbl_session_details created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                // Create Workshop Tables ---------------->
                var workshop_query = 'CREATE TABLE IF NOT EXISTS `tbl_workshops`(`workshop_id` INT PRIMARY KEY, `title` VARCHAR(500) DEFAULT NULL, `conveners` VARCHAR(500) DEFAULT NULL, `venue` VARCHAR(500) DEFAULT NULL, `start_date` VARCHAR(100) DEFAULT NULL, `start_time` VARCHAR(50) DEFAULT NULL, `end_time` VARCHAR(50) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(workshop_query, [])
                    .then(() => console.log('Table: tbl_workshops created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                var workshop_details_query = 'CREATE TABLE IF NOT EXISTS `tbl_workshop_details`(`topic_id` INT PRIMARY KEY, `topic` VARCHAR(500) DEFAULT NULL, `type` VARCHAR(100) DEFAULT NULL, `faculty` VARCHAR(500) DEFAULT NULL, `workshop_id` VARCHAR(5) DEFAULT NULL, `start_time` VARCHAR(100) DEFAULT NULL, `end_time` VARCHAR(100) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `status` INT NOT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(workshop_details_query, [])
                    .then(() => console.log('Table: tbl_workshop_details created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                // Create Nursing Tables ---------------->
                var nursing_query = 'CREATE TABLE IF NOT EXISTS `tbl_nursing`(`nursing_id` INT PRIMARY KEY, `title` VARCHAR(500) DEFAULT NULL, `conveners` VARCHAR(500) DEFAULT NULL, `venue` VARCHAR(500) DEFAULT NULL, `start_date` VARCHAR(100) DEFAULT NULL, `start_time` VARCHAR(50) DEFAULT NULL, `end_time` VARCHAR(50) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(nursing_query, [])
                    .then(() => console.log('Table: tbl_nursing created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                var nursing_details_query = 'CREATE TABLE IF NOT EXISTS `tbl_nursing_details`(`topic_id` INT PRIMARY KEY, `topic` VARCHAR(500) DEFAULT NULL, `faculty` VARCHAR(500) DEFAULT NULL, `nursing_id` VARCHAR(5) DEFAULT NULL, `start_time` VARCHAR(100) DEFAULT NULL, `end_time` VARCHAR(100) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `status` INT NOT NULL, `is_active` INT NOT NULL)';
                this.db.executeSql(nursing_details_query, [])
                    .then(() => console.log('Table: tbl_nursing_details created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
                // Create User Table ---------------->
                var users_query = 'CREATE TABLE IF NOT EXISTS `tbl_users`(`tbl_id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` VARCHAR(50) DEFAULT NULL, `fname` VARCHAR(100) DEFAULT NULL, `lname` VARCHAR(100) DEFAULT NULL, `email` VARCHAR(100) DEFAULT NULL, `password` VARCHAR(50) DEFAULT NULL, `dob` VARCHAR(50) DEFAULT NULL, `gender` VARCHAR(50) DEFAULT NULL, `mobile` VARCHAR(50) DEFAULT NULL, `address` VARCHAR(250) DEFAULT NULL, `city` VARCHAR(100) DEFAULT NULL, `state` VARCHAR(100) DEFAULT NULL, `country` VARCHAR(100) DEFAULT NULL, `pincode` VARCHAR(50) DEFAULT NULL, `contactno` VARCHAR(50) DEFAULT NULL, `is_member` VARCHAR(50) DEFAULT NULL, `isa_membership` VARCHAR(100) DEFAULT NULL, `councilregno` VARCHAR(100) DEFAULT NULL, `qualification` VARCHAR(250) DEFAULT NULL, `qualification_year` VARCHAR(50) DEFAULT NULL, `reg_type` VARCHAR(100) DEFAULT NULL, `currency` VARCHAR(10) DEFAULT NULL, `amount` VARCHAR(50) DEFAULT NULL, `create_date` VARCHAR(100) DEFAULT NULL, `is_saved` INT DEFAULT 0, `is_active` INT NOT NULL)';
                this.db.executeSql(users_query, [])
                    .then(() => console.log('Table: tbl_users created.'))
                    .catch(e => console.log("Error: " + JSON.stringify(e)));
         	})
         	.catch(e => console.log("Error: "+JSON.stringify(e)));
 	}

    dropTables():void {
        this.db.executeSql('DROP TABLE `tbl_sessions`', [])
            .then(() => console.log('Table: tbl_sessions dropped.'))
            .catch(e => console.log("Error: " + JSON.stringify(e)));
        this.db.executeSql('DROP TABLE `tbl_session_details`', [])
            .then(() => console.log('Table: tbl_session_details dropped.'))
            .catch(e => console.log("Error: " + JSON.stringify(e)));
        this.db.executeSql('DROP TABLE `tbl_workshops`', [])
            .then(() => console.log('Table: tbl_workshops dropped.'))
            .catch(e => console.log("Error: " + JSON.stringify(e)));
        this.db.executeSql('DROP TABLE `tbl_workshop_details`', [])
            .then(() => console.log('Table: tbl_workshop_details dropped.'))
            .catch(e => console.log("Error: " + JSON.stringify(e)));
        this.db.executeSql('DROP TABLE `tbl_nursing_details`', [])
            .then(() => console.log('Table: tbl_nursing_details dropped.'))
            .catch(e => console.log("Error: " + JSON.stringify(e)));
    }

    setSessions(sessions){
        for(let i = 0; i < sessions.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_sessions` WHERE `session_id` = ?', [sessions[i].session_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_sessions` SET `session_name`=?, `title`=?, `type`=?, `moderator`=?, `chairman`=?, `start_date`=?, `start_time`=?, `end_time`=?, `create_date`=?, `status`=?, `is_active`=? WHERE `session_id`=?', [sessions[i].session_name, sessions[i].title, sessions[i].type, sessions[i].moderator, sessions[i].chairman, sessions[i].start_date, sessions[i].start_time, sessions[i].end_time, sessions[i].create_date, sessions[i].status, sessions[i].is_active, sessions[i].session_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_sessions` (`session_id`, `session_name`, `title`, `type`, `moderator`, `chairman`, `start_date`, `start_time`, `end_time`, `create_date`, `status`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [sessions[i].session_id, sessions[i].session_name, sessions[i].title, sessions[i].type, sessions[i].moderator, sessions[i].chairman, sessions[i].start_date, sessions[i].start_time, sessions[i].end_time, sessions[i].create_date, sessions[i].status, sessions[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }

    setSessionDetails(session_details){
        for(let i = 0; i < session_details.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_session_details` WHERE `topic_id` = ?', [session_details[i].topic_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_session_details` SET `topic`=?, `speakers`=?, `session_id`=?, `start_time`=?, `end_time`=?, `create_date`=?, `is_active`=? WHERE `topic_id`=?', [session_details[i].topic, session_details[i].speakers, session_details[i].session_id, session_details[i].start_time, session_details[i].end_time, session_details[i].create_date, session_details[i].is_active, session_details[i].topic_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_session_details` (`topic_id`, `topic`, `speakers`, `session_id`, `start_time`, `end_time`, `create_date`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [session_details[i].topic_id, session_details[i].topic, session_details[i].speakers, session_details[i].session_id, session_details[i].start_time, session_details[i].end_time, session_details[i].create_date, session_details[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }

    getSessions() {
        let sql = "SELECT * FROM `tbl_sessions` WHERE `is_active`= 1";
        return this.db.executeSql(sql, [])
            .then((result) => {
                let arraySession = [];
                if (result.rows.length > 0) {
                    for (var i =0; i < result.rows.length; i++) {
                        arraySession.push({
                            session_id: result.rows.item(i).session_id,
                            session_name: result.rows.item(i).session_name,
                            title: result.rows.item(i).title,
                            type: result.rows.item(i).type,
                            moderator: result.rows.item(i).moderator,
                            chairman: result.rows.item(i).chairman,
                            start_date: result.rows.item(i).start_date,
                            start_time: result.rows.item(i).start_time,
                            end_time: result.rows.item(i).end_time,
                            status: result.rows.item(i).status
                        });
                    }
                }
                return arraySession;
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                return [];
            });
    }

    getSessionDetails(session_id) {console.log(session_id);
        let sql = "SELECT * FROM `tbl_session_details` WHERE `session_id`= "+session_id;
        return this.db.executeSql(sql, [])
            .then((result) => {
                let arraySession = [];
                if (result.rows.length > 0) {
                    for (var i =0; i < result.rows.length; i++) {
                        arraySession.push({
                            topic_id: result.rows.item(i).topic_id,
                            topic: result.rows.item(i).topic,
                            speakers: result.rows.item(i).speakers,
                            session_id: result.rows.item(i).session_id,
                            start_time: result.rows.item(i).start_time,
                            end_time: result.rows.item(i).end_time
                        });
                    }
                }
                return arraySession;
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                return [];
            });
    }

    setWorkshops(workshops){
        for(let i = 0; i < workshops.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_workshops` WHERE `workshop_id` = ?', [workshops[i].workshop_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_workshops` SET `title`=?, `conveners`=?, `venue`=?, `start_date`=?, `start_time`=?, `end_time`=?, `create_date`=?, `is_active`=? WHERE `workshop_id`=?', [workshops[i].title, workshops[i].conveners, workshops[i].venue, workshops[i].start_date, workshops[i].start_time, workshops[i].end_time, workshops[i].create_date, workshops[i].is_active, workshops[i].workshop_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_workshops` (`workshop_id`, `title`, `conveners`, `venue`, `start_date`, `start_time`, `end_time`, `create_date`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [workshops[i].workshop_id, workshops[i].title, workshops[i].conveners, workshops[i].venue, workshops[i].start_date, workshops[i].start_time, workshops[i].end_time, workshops[i].create_date, workshops[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }
 	
    setWorkshopDetails(workshop_details){
        for(let i = 0; i < workshop_details.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_workshop_details` WHERE `topic_id` = ?', [workshop_details[i].topic_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_workshop_details` SET `topic`=?, `type` =?, `faculty`=?, `workshop_id`=?, `start_time`=?, `end_time`=?, `create_date`=?, `status`=?, `is_active`=? WHERE `topic_id`=?', [workshop_details[i].topic, workshop_details[i].type, workshop_details[i].faculty, workshop_details[i].workshop_id, workshop_details[i].start_time, workshop_details[i].end_time, workshop_details[i].create_date, workshop_details[i].status, workshop_details[i].is_active, workshop_details[i].topic_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_workshop_details` (`topic_id`, `topic`, `type`, `faculty`, `workshop_id`, `start_time`, `end_time`, `create_date`, `status`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [workshop_details[i].topic_id, workshop_details[i].topic, workshop_details[i].type, workshop_details[i].faculty, workshop_details[i].workshop_id, workshop_details[i].start_time, workshop_details[i].end_time, workshop_details[i].create_date, workshop_details[i].status, workshop_details[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }

    setNursing(nursing){
        for(let i = 0; i < nursing.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_nursing` WHERE `nursing_id` = ?', [nursing[i].nursing_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_nursing` SET `title`=?, `conveners`=?, `venue`=?, `start_date`=?, `start_time`=?, `end_time`=?, `create_date`=?, `is_active`=? WHERE `nursing_id`=?', [nursing[i].title, nursing[i].conveners, nursing[i].venue, nursing[i].start_date, nursing[i].start_time, nursing[i].end_time, nursing[i].create_date, nursing[i].is_active, nursing[i].nursing_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_nursing` (`nursing_id`, `title`, `conveners`, `venue`, `start_date`, `start_time`, `end_time`, `create_date`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nursing[i].nursing_id, nursing[i].title, nursing[i].conveners, nursing[i].venue, nursing[i].start_date, nursing[i].start_time, nursing[i].end_time, nursing[i].create_date, nursing[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }

    setNursingDetails(nursing_details){
        for(let i = 0; i < nursing_details.length; i++){
            this.db.executeSql('SELECT * FROM `tbl_nursing_details` WHERE `topic_id` = ?', [nursing_details[i].topic_id])
                .then((result) => {
                    if(result.rows.length > 0) {
                        this.db.executeSql('UPDATE `tbl_nursing_details` SET `topic`=?, `faculty`=?, `nursing_id`=?, `start_time`=?, `end_time`=?, `create_date`=?, `status`=?, `is_active`=? WHERE `topic_id`=?', [nursing_details[i].topic, nursing_details[i].faculty, nursing_details[i].nursing_id, nursing_details[i].start_time, nursing_details[i].end_time, nursing_details[i].create_date, nursing_details[i].status, nursing_details[i].is_active, nursing_details[i].topic_id])
                            .then((res) => console.log('Executed SQL'+res))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    else{
                        this.db.executeSql('INSERT INTO `tbl_nursing_details` (`topic_id`, `topic`, `faculty`, `nursing_id`, `start_time`, `end_time`, `create_date`, `status`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nursing_details[i].topic_id, nursing_details[i].topic, nursing_details[i].faculty, nursing_details[i].nursing_id, nursing_details[i].start_time, nursing_details[i].end_time, nursing_details[i].create_date, nursing_details[i].status, nursing_details[i].is_active])
                            .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                            .catch(e => console.log("Error: " + JSON.stringify(e)));
                    }
                    return result;
                })
                .catch(e => console.log(JSON.stringify(e)));
        }
    }

    getWorkshop() {
        let sql = "SELECT * FROM `tbl_workshops` WHERE `is_active`= 1";
        return this.db.executeSql(sql, []).then((result) => {
            let arrWorkshops = [];
            if(result.rows.length > 0) {
                for (var i =0; i < result.rows.length; i++) {
                    arrWorkshops.push({
                        workshop_id: result.rows.item(i).workshop_id,
                        title: result.rows.item(i).title,
                        conveners: result.rows.item(i).conveners,
                        venue: result.rows.item(i).venue,
                        start_date: result.rows.item(i).start_date,
                        start_time: result.rows.item(i).start_time,
                        end_time: result.rows.item(i).end_time
                    });
                }
            }
            return arrWorkshops;
        })
        .catch(e => {
            console.log(JSON.stringify(e))
            return [];
        });
    }

    getWorkshopDetails(workshop_id) {
        let sql = "SELECT * FROM `tbl_workshop_details` WHERE `workshop_id`= "+workshop_id;
        return this.db.executeSql(sql, []).then((result) => {
            let arrWorkshops = [];
            if(result.rows.length > 0) {
                for (var i =0; i < result.rows.length; i++) {
                    arrWorkshops.push({
                        topic_id: result.rows.item(i).topic_id,
                        topic: result.rows.item(i).topic,
                        type: result.rows.item(i).type,
                        faculty: result.rows.item(i).faculty,
                        workshop_id: result.rows.item(i).workshop_id,
                        start_time: result.rows.item(i).start_time,
                        end_time: result.rows.item(i).end_time,
                        status: result.rows.item(i).status
                    });
                }
            }
            return arrWorkshops;
        })
        .catch(e => {
            console.log(JSON.stringify(e))
            return [];
        });
    }

    getNursing() {
        let sql = "SELECT * FROM `tbl_nursing` WHERE `is_active`= 1";
        return this.db.executeSql(sql, []).then((result) => {
            let arrNursing = [];
            if(result.rows.length > 0) {
                for (var i =0; i < result.rows.length; i++) {
                    arrNursing.push({
                        nursing_id: result.rows.item(i).nursing_id,
                        title: result.rows.item(i).title,
                        conveners: result.rows.item(i).conveners,
                        venue: result.rows.item(i).venue,
                        start_date: result.rows.item(i).start_date,
                        start_time: result.rows.item(i).start_time,
                        end_time: result.rows.item(i).end_time
                    });
                }
            }
            return arrNursing;
        })
        .catch(e => {
            console.log(JSON.stringify(e))
            return [];
        });
    }

    getNursingDetails() {
        let sql = "SELECT * FROM `tbl_nursing_details` WHERE `is_active`= 1";
        return this.db.executeSql(sql, []).then((result) => {
            let arrNursing = [];
            if(result.rows.length > 0) {
                for (var i =0; i < result.rows.length; i++) {
                    arrNursing.push({
                        topic_id: result.rows.item(i).topic_id,
                        topic: result.rows.item(i).topic,
                        faculty: result.rows.item(i).faculty,
                        nursing_id: result.rows.item(i).nursing_id,
                        start_time: result.rows.item(i).start_time,
                        end_time: result.rows.item(i).end_time,
                        status: result.rows.item(i).status,
                    });
                }
            }
            return arrNursing;
        })
        .catch(e => {
            console.log(JSON.stringify(e))
            return [];
        });
    }

    setSavedUser(data){
        return this.db.executeSql('SELECT * FROM `tbl_users` WHERE `is_saved` = 1',[])
            .then((result) => { 
                var date_time = this.getDateTime();
                if(result.rows.length > 0) {
                    this.db.executeSql('UPDATE `tbl_users` SET `fname`=?, `lname`=?, `email`=?, `password`=?, `dob`=?, `gender`=?, `mobile`=?, `address`=?, `city`=?, `state`=?, `country`=?, `pincode`=?, `contactno`=?, `is_member`=?, `isa_membership`=?, `councilregno`=?, `qualification`=?, `qualification_year`=?, `reg_type`=?, `currency`=?, `amount`=?, `create_date`=? WHERE `is_saved` = 1', [data.fname, data.lname, data.email, data.password, data.dob, data.gender, data.mobile, data.address, data.city, data.state, data.country, data.pincode, data.contactno, data.is_member, data.isa_membership, data.councilregno, data.qualification, data.qualification_year, data.reg_type, data.currency, data.amount, date_time])
                        .then((res) => console.log('Executed SQL'+res))
                        .catch(e => console.log("Error Update: " + JSON.stringify(e)));
                }
                else{
                    this.db.executeSql('INSERT INTO `tbl_users`(`fname`, `lname`, `email`, `password`, `dob`, `gender`, `mobile`, `address`, `city`, `state`, `country`, `pincode`, `contactno`, `is_member`, `isa_membership`, `councilregno`, `qualification`, `qualification_year`, `reg_type`, `currency`, `amount`, `create_date`, `is_saved`, `is_active`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1)', [data.fname, data.lname, data.email, data.password, data.dob, data.gender, data.mobile, data.address, data.city, data.state, data.country, data.pincode, data.contactno, data.is_member, data.isa_membership, data.councilregno, data.qualification, data.qualification_year, data.reg_type, data.currency, data.amount, date_time])
                        .then((res) => console.log('Executed SQL'+JSON.stringify(res)))
                        .catch(e => console.log("Error Insert: " + JSON.stringify(e)));
                }
                return true;
            })
            .catch((err) => {
                console.log("Error Check: "+JSON.stringify(err));
                return false;
            });
    }

    getSavedUser() {
        return this.db.executeSql('SELECT * FROM `tbl_users` WHERE `is_saved`= 1', []).then((result) => {
            let arrUser = [];
            if(result.rows.length > 0) {
                for (var i =0; i < result.rows.length; i++) {
                    arrUser.push({
                        fname: result.rows.item(i).fname,
                        lname: result.rows.item(i).lname,
                        email: result.rows.item(i).email,
                        password: result.rows.item(i).password,
                        dob: result.rows.item(i).dob,
                        gender: result.rows.item(i).gender,
                        mobile: result.rows.item(i).mobile,
                        address: result.rows.item(i).address,
                        city: result.rows.item(i).city,
                        state: result.rows.item(i).state,
                        country: result.rows.item(i).country,
                        pincode: result.rows.item(i).pincode,
                        contactno: result.rows.item(i).contactno,
                        is_member: result.rows.item(i).is_member,
                        isa_membership: result.rows.item(i).isa_membership,
                        councilregno: result.rows.item(i).councilregno,
                        qualification: result.rows.item(i).qualification,
                        qualification_year: result.rows.item(i).qualification_year,
                        reg_type: result.rows.item(i).reg_type,
                        currency: result.rows.item(i).currency,
                        amount: result.rows.item(i).amount,
                    });
                }
            }
            return arrUser;
        })
        .catch(e => {
            console.log(JSON.stringify(e))
            return [];
        });
    }



    getDateTime(){
        var now = new Date(); 
        var year:any = now.getFullYear();
        var month:any = now.getMonth()+1; 
        var day:any = now.getDate();
        var hour:any = now.getHours();
        var minute:any = now.getMinutes();
        var second:any = now.getSeconds(); 
        if(month.toString().length == 1) {
            month = '0'+month;
        }
        if(day.toString().length == 1) {
            day = '0'+day;
        }   
        if(hour.toString().length == 1) {
            hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
            minute = '0'+minute;
        }
        if(second.toString().length == 1) {
            second = '0'+second;
        }
        return day+"/"+month+"/"+year+" "+hour+":"+minute;
    }

}