Feature: Tokopedia product search

    Feature This is for looking for a product in Tokopedia

    Scenario: Search for Laptop Asus
        Given A user opens Tokopedia landing page
        When A user search for "laptop asus"
        And A user click on the top right of product list
        Then The product detail will shown