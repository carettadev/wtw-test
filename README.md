# wtw-test

It is a working solution with some unit tests and e2e tests. I would make a more complete test suite in real scenario.

Some other notes on my Solution:

Server Side

- Only basic unit tests
- Made an assumption that the repository code could not be changed
- No exception logging
- No server side validation

Client Side

- Needs more validation on inputs and better user error messages
- Needs warning dialog on delete to confirm action with user
- better error logging required. just logging to console at the moment
- Was going to use NgRx but thought it overkill for this
- Had many issues with getting e2e tests working due to npm/node/package version clashses. Should be OK now.
- ideally protractor tests should run be against mocks. disabled CORS on server side to get around this. Need to ensure to restart backend before running ng e2e to ensure data is in consistent state

Requirements

Info:

The solution contains a standard Asp.Net Core project with an Angular cli project. Using Visual Studio F5 will build both the server side and client side code and launch the website.

Once running the client side code (found in ClientApp/src) can be edited in Visual Studio or any other IDE (e.g. VSCode) and will be rebuilt as files are changed

There is a single server side API controller called PolicyController that has a very simple implementation of a repository for storing policies of the following format:

Each policy has the following structure and data classes are already provided:
{
PolicyNumber: int,
PolicyHolder: {
Name: string,
Age: int,
Gender: emum
}
}

Requirements:

1. A website is required that will display all policies from the repository.
2. It should be possible to do CRUD operations on Policies.
3. It is up to you how you design the website and CRUD operations.
4. You may use existing CSS/frameworks to create a professional looking front end.
