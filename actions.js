import {MongoClient} from 'mongodb';

const url = "mongodb://localhost:27017/Deck-of-cards";
var db = null;

exports.connect = function(done){
	if(db) return done();
	MongoClient.connect(url,function(err,mongodb){
		if(err) return done(err);
		db = mongodb;
		db.collection('users').createIndex( { 'email': 1}, { unique: true } ,function(err,res){
			// console.log(err,res);
			done();	
		})
	})
}

exports.get = function(){
	return db;
}

exports.close = function(done){
	if(db){
		db.close(function(err,res){
			if(err) return done(err);
			db = null;
			done();
		})
	}
}
