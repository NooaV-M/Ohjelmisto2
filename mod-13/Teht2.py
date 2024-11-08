from flask import Flask

import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    port=3306,
    database="flight_game",
    user="NOOA",
    password="1234",
    autocommit=True,
    collation='utf8mb4_general_ci'
)

app = Flask(__name__)

@app.route('/airport/<ICAO_code>')
def airportget(ICAO_code):
    sql = f"SELECT name, municipality FROM airport WHERE ident = '{ICAO_code}'"
    cursor = connection.cursor()
    cursor.execute(sql)
    fetch_result = cursor.fetchall()

    if fetch_result:
        return {
            "ICAO" : ICAO_code,
             "Name" : fetch_result[0][0],
              "Location" : fetch_result[0][1]}
    else:
        print("Invalid ICAO code")
    return "not found"

if __name__ == '__main__':
    app.run(use_reloader=True, port=3000)