---
title: "Using Pytest with Flask"
author:
  - errbufferoverfl
date: 2023-07-14T11:14:22+09:30
date-modified: 2024-09-15T12:25:14+09:30
categories:
  - Flask
  - PyTest
  - Python
  - Seed
  - Unit Testing
---

## What to Test?

Unit tests should focus on testing a small unit of code in isolation:

- Database models
- Utility functions

Functional tests should focus on how the view functions operate:

- Nominal conditions (GET, POST, etc.) for a view function
- Invalid HTTP methods are handled properly for a view function
- Invalid data is passed to a view function

## Documenting Tests

Martin Fowler provides a really idiomatic way of describing tests in his blog post on [GivenWhenThen](https://martinfowler.com/bliki/GivenWhenThen.html):

```python
"""
GIVEN a User model
WHEN a new User is created
THEN check the email, hashed_password, and role fields are defined correctly
"""
```

- GIVEN - what are the initial conditions for the test?
- WHEN - what is occurring that needs to be tested?
- THEN - what is the expected response?

## Testing for Exceptions

Asserting an exception **is** raised:

```python
import pytest

def test_raises_exception():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```

Asserting an exception **is not** raised:

```python
def my_division_function(a, b):
    return a / b

def test_code_raises_no_exception():
    """
    Assert your python code raises no exception.    
    """
    try:
        my_division_function(10, 5)
    except ZeroDivisionError as exc:
        assert False, f"'10 / 5' raised an exception {exc}"
```

## Pytest Fixtures

Fixtures initialise tests to a known state to run tests in a predictable and repeatable manner, these should be created in your `conftest.py` file.

In Pytest, fixtures can be run with different scopes:

- `function` - run once per test function (default scope)
- `class` - run once per test class
- `module` - run once per module (e.g., a test file)
- `session` - run once per session

For example, to create a User as a fixture:

```python
from project.models import User

@pytest.fixture(scope='module')
def new_user():
    user = User('username@example.com', 'Password1!')
    return user
```

`@pytest.fixture(scope='module')`

This decorator specifies that a function is a fixture with a module-level scope. So this fixture will be called once per test module.

`def new_user()`

Is the function that creates an instance of a User using valid arguments.

To use this fixture, in other tests you pass it in as the first argument to a subsequent test, e.g.,

```python
def test_new_user_with_fixture(new_user):
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the email, hashed_password, and role fields are defined correctly
    """
    assert new_user.email == 'username@example.com'
    assert new_user.hashed_password != 'Password1!'
    assert new_user.role == 'user'
```
