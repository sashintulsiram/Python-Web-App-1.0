# Prerequisite Python Packages
import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request
from flask import jsonify
from flask import flash, request

# Test Hello World Web Page

# Decorator - Create route directory for web application.
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# REST API Operation - POST - Create a database record in table "trusted_leading_brands_tb01".

# Decorator - Create route directory for creating a Database record.
@app.route('/api_create_trusted_leading_brands', methods=['POST'])

# Function - Create a Database record
def create_trusted_leading_brands():
    # Try, Except, Finally statement - Creating a Database record    
    try: 
        _json = request.json        
        _company_name_tb01 = _json['company_name_tb01']
        _company_information_tb01 = _json['company_information_tb01']
        _economic_sector_tb01 = _json['economic_sector_tb01']
        _sector_tb01 = _json['sector_tb01']
        _industry_tb01 = _json['industry_tb01']
        _brand_image_tb01 = _json['brand_image_tb01']

        # If statement - If data is provided and mets requirements. Create Database record
        if _company_name_tb01 and _company_information_tb01 and _economic_sector_tb01 and _sector_tb01 and \
            _industry_tb01 and _brand_image_tb01 and request.method == 'POST':
            create_mysql_connection = mysql.connect()
            pymysql_cursor = create_mysql_connection.cursor(pymysql.cursors.DictCursor)		
            sql_insert_query = "INSERT INTO trusted_leading_brands_tb01(company_name_tb01, company_information_tb01, economic_sector_tb01,\
                sector_tb01, industry_tb01, brand_image_tb01) VALUES(%s, %s, %s, %s, %s, %s)"
            list_of_db_data = (_company_name_tb01, _company_information_tb01, _economic_sector_tb01, _sector_tb01, _industry_tb01, \
                               _brand_image_tb01)
            pymysql_cursor.execute(sql_insert_query, list_of_db_data)
            create_mysql_connection.commit()
            http_response = jsonify('Trusted leading brand added successfully!')
            http_response.status_code = 200
            return http_response
        else:
            return api_error_handler_404()

    # Return and print exception message when raised        
    except Exception as e:
        print(e)

    #Close MySQL Cursor and Database Connection
    finally:
        pymysql_cursor.close() 
        create_mysql_connection.close()          



# REST API Operation - GET - Read all database records in table "trusted_leading_brands_tb01".

# Decorator - Create route directory for getting all Database records
@app.route('/api_get_trusted_leading_brands')

# Function - Get all Database records
def get_all_trusted_leading_brands():
    # Try, Except, Finally statement - Get all Database records
    try:
        create_mysql_connection = mysql.connect()
        pymysql_cursor = create_mysql_connection.cursor(pymysql.cursors.DictCursor)
        pymysql_cursor.execute("SELECT id_tb01, company_name_tb01, company_information_tb01, economic_sector_tb01, sector_tb01, industry_tb01, brand_image_tb01 FROM trusted_leading_brands_tb01")
        #pymysql_cursor.execute("SELECT id_tb01, company_name_tb01, company_information_tb01, economic_sector_tb01, sector_tb01, industry_tb01 FROM trusted_leading_brands_tb01")
        database_record = pymysql_cursor.fetchall()
        http_response = jsonify(database_record)
        http_response.status_code = 200
        return http_response
    
    # Return and print exception message when raised
    except Exception as e:
        print(e)
        
    #Close MySQL Cursor and Database Connection        
    finally:
        pymysql_cursor.close() 
        create_mysql_connection.close()  



# REST API Operation - GET - Read one database record in table "trusted_leading_brands_tb01" by providing its ID

# Decorator - Create route directory for getting a Database record
@app.route('/api_get_trusted_leading_brand/')

# Function - Get one Database record
def get_one_trusted_leading_brands(id_tb01):
    # Try, Except, Finally statement - Get one Database record 
    try:
        create_mysql_connection = mysql.connect()
        pymysql_cursor = create_mysql_connection.cursor(pymysql.cursors.DictCursor)
        pymysql_cursor.execute(f"SELECT id_tb01, company_name_tb01, company_information_tb01, economic_sector_tb01, sector_tb01, industry_tb01, brand_image_tb01 FROM trusted_leading_brands_tb01 WHERE id_tb01 ={id_tb01}")
        database_record = pymysql_cursor.fetchone()
        http_response = jsonify(database_record)
        http_response.status_code = 200
        return http_response
    
    # Return and print exception message when raised
    except Exception as e:
        print(e)

    # Close MySQL Cursor and Database Connection
    finally:
        pymysql_cursor.close()
        create_mysql_connection.close()



# REST API Operation - UPDATE - Update an existing database record in table "trusted_leading_brands_tb01"
# Decorator - Create route directory for updating Database record
@app.route('/api_update_trusted_leading_brand', methods=['PUT'])

# Function - Update Database record
def update_trusted_leading_brand():
    # Try, Except, Finally statement - Update Database record
    try:
        _json = request.json        
        _company_name_tb01 = _json['company_name_tb01']
        _company_information_tb01 = _json['company_information_tb01']
        _economic_sector_tb01 = _json['economic_sector_tb01']
        _sector_tb01 = _json['sector_tb01']
        _industry_tb01 = _json['industry_tb01']
        _brand_image_tb01 = _json['brand_image_tb01']
        _id_tb01 = _json['id_tb01']

        # If statement - If data is provided and mets requirements. Update Database 
        if _company_name_tb01 and _company_information_tb01 and _economic_sector_tb01 and _sector_tb01 and \
            _industry_tb01 and _brand_image_tb01 and _id_tb01 and request.method == 'PUT':
            sql_update_query = "UPDATE trusted_leading_brands_tb01 SET company_name_tb01=%s, company_information_tb01=%s, \
                economic_sector_tb01=%s, sector_tb01=%s, industry_tb01=%s, brand_image_tb01=%s WHERE id_tb01=%s"
            list_of_db_data = (_company_name_tb01, _company_information_tb01, _economic_sector_tb01, _sector_tb01, _industry_tb01, \
                               _brand_image_tb01, _id_tb01,)
            create_mysql_connection = mysql.connect()
            pymysql_cursor = create_mysql_connection.cursor()
            pymysql_cursor.execute(sql_update_query, list_of_db_data)
            create_mysql_connection.commit()
            http_response = jsonify('Trusted leading brand updated successfully!')
            http_response.status_code = 200
            return http_response
        
        # Return 404 error message on failure
        else:
            return api_error_handler_404()
        
    # Return and print exception message when raised     
    except Exception as e:
        print(e)

    #Close MySQL Cursor and Database Connection
    finally:
        pymysql_cursor.close() 
        create_mysql_connection.close() 


# REST API Operation - DELETE - Delete a database record in table "trusted_leading_brands_tb01" by providing its ID
# Decorator - Create route directory for deleting Database record
@app.route('/api_delete_trusted_leading_brand/', methods=['DELETE'])

# Function - Delete Database record
def delete_one_trusted_leading_brand(id_tb01):
    # Try, Except, Finally statement - Delete Database record
	try:
		create_mysql_connection = mysql.connect()
		pymysql_cursor = create_mysql_connection.cursor()
		pymysql_cursor.execute("DELETE FROM trusted_leading_brands_tb01 WHERE id_tb01 =%s", (id_tb01,))
		create_mysql_connection.commit()
		http_response = jsonify(f'Trusted leading brand with ID: {id_tb01} deleted successfully!')
		http_response.status_code = 200
		return http_response

    # Return and print exception message when raised.        
	except Exception as e:
		print(e)

    #Close MySQL Cursor and Database Connection
	finally:
		pymysql_cursor.close() 
		create_mysql_connection.close()
        

# REST API - Error Handling - Response code 404 will return message "URL not found" and the entered URL 
# Decorator - For Error Handling 404 messages  
@app.errorhandler(404)

# Function - Print error status code and error message 
def api_error_handler_404(error=None):
    message = {
        'status': 404,
        'message': 'URL not found: ' + request.url,
    }
    http_response = jsonify(message)
    http_response.status_code = 404
    return http_response
        

# Start Flask Web Application
if __name__ == "__main__":
    app.run()