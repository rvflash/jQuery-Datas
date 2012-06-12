jQuery-Datas
============

Extends jQuery data function to manage internal datas, HTML5 data-attributes and elements with class 'data-*' or 'datas-' for multiple values by name

## Examples ##

For example, you can do:

    <ul id="items">
        <li data-id="123">
            <h2 class="data-title">My product 1</h2>
            <ul class="datas-prices">
                <li>45.00 €</li>
                <li>40.00 €</li>
            </ul>
        </li>
    </ul>

Of course, you can add, remove or modify datas as you would with jquery data:

    $("#items li").datas('catid', 565);

And later access the dataset object:

    $("#items li:first").datas(); // {id: 123, catid: 565, title: "My product 1", prices: ['45.00 €', '40.00 €']}

Or call a specific data attribut by name:

    $("#items li:first").datas("title"); // "My product 1"

Html element with class like "data-..." will be stored as if it was tagged with an HTML5 attribute.

For store multi values with the same key as array, we will use class named "datas-..." and content of each child will be stored separately
