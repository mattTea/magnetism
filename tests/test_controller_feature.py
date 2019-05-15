from splinter import Browser

def test_topics():

    browser = Browser('firefox', headless="true")

    browser.visit('http://localhost:5000/topics/add')
    browser.visit('http://localhost:5000/topics')
    assert browser.is_text_present('Physics')

    browser.quit()
