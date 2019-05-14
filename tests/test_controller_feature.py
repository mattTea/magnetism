# import flask

from splinter import Browser
browser = Browser('firefox', headless="true")

# def test_topics():

browser.visit('http://localhost:5000/topics')

assert browser.is_text_present('Physics')
# assert browser.is_text_present('URL')


browser.quit()
