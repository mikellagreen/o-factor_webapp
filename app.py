from flask import Flask #this is our backend microframework
from flask import render_template #handy dandy ext to render our html layout
from flask_pymongo import PyMongo #flask specific bridge to mongodb driver (pymongo)



app = Flask(__name__)

@app.route("/")
def index(): 
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)