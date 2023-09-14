from main import app
import unittest


class FlaskTestCase(unittest.TestCase):
    # Test for status code 200 from Flask Web Server
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get("/")
        statuscode = response.status_code
        self.assertEqual(statuscode, 200)

    # Test if data from Flask REST API is return as application/json
    def test_index_api_content(self):
        tester = app.test_client(self)
        response = tester.get("/api_get_trusted_leading_brands")
        self.assertEqual(response.content_type, "application/json")

    # Test if data from Flask REST API is return: Company Name = Engen
    def test_index_api_data(self):
        tester = app.test_client(self)
        response = tester.get("/api_get_trusted_leading_brands")
        self.assertTrue(b"Engen" in response.data)


if __name__ == "__main__":
    unittest.main()
