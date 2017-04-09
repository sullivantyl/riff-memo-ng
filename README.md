# TabNg

A simple tool to quickly jot down guitar riffs using the way we say them outloud.

## Usage

Commands:
    clean : removes all tab stanzas
    delete : removes most recent stanza
    new : add a blank stanza below
    help : displays and hides the quick commands help
    
    text based entry:
        a blank space adds a row of -
        
        numbers followed by:

            E A D G B e : puts that fret on corresponding string
                i.e. 5 E 2 3 A becomes 
                    e | --------
                    B | --------
                    G | --------
                    D | --------
                    A | ----2-3-
                    E | -5------

            L : sets the default length of stanzas
                i.e. 30 L sets length to 30 characters (excluding string names and column)

        numbers with proceeding ":
            space separated numbers in order become a chord,
                i.e. "3 2 - - - 2 becomes
                    e | -2-
                    B | ---
                    G | ---
                    D | ---
                    A | -2-
                    E | -3-

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
