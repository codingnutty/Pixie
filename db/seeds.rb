# my user info, etc.

User.create(first_name: "Nruthya", last_name: "Lak", username: "nruthy2687", email: "nruthya@gmail.com", password_hash: "password", img_url: "https://lh5.googleusercontent.com/-GtGRXziECXA/AAAAAAAAAAI/AAAAAAAAAA8/wadaH4slqwA/photo.jpg")

my_id = User.find_by(email: "nruthya@gmail.com").id

my_imgs = ["http://www.losapos.com/pics/44/leh05.jpg", "http://www.tripdesigners.co/wp-content/uploads/2015/06/Monastery.jpg", "http://bajajholidays.com/leh/Leh-Ladakh-Packages6.jpg", "http://awesometripadvisor.com/wp-content/uploads/2014/09/leh1.jpg", "http://www.sunriseholidays.in/india/leh-ladakh/leh-ladakh-big.jpg"]

Location.create(name: "Leh", latitude: 34.1454, longitude: 77.567, user_id: 1)
Tag.create(hashtag: "snow", user_id: 1)



