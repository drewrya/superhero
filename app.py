# import necessary libraries
from flask import Flask, render_template
import pymongo


# create instance of Flask app
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def home():

    return render_template('index.html')

@app.route("/bios")
def bios():

    return render_template('bios.html')

@app.route("/powerstats")
def powerstats():

    return render_template('powerstats.html')

@app.route("/top50")
def top50():

    return render_template('top50.html')

if __name__ == "__main__":
    app.run(debug=True)

