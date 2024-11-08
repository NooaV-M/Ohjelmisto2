from flask import Flask

app = Flask(__name__)

@app.route('/prime_number/<int:luku>')
def alkuluku(luku):
    isprime = True

    if luku < 2:
        isprime = False

    for jakaja in range(2, round(luku/2)):
        if luku % jakaja == 0:
            isprime = False

    vastaus = {
        "Number" : luku,
        "isPrime" : isprime
    }
    return vastaus

if __name__ == '__main__':
    app.run(use_reloader=True, port=3000)