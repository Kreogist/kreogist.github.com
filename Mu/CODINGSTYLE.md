A simple coding style for this repo.

#HTML

- Indent:2 spaces,no tab.
- if not necessary,DO NOT USE:
  - <br>
  - embbed stylesheet
  - inline stylesheet

#Stylesheet

- split main style and responsive style into 2 SCSS file.

- follow the rough coding order below.

        RULES:fixing aiming
        Mixins
        Consants
        RULES:selectors for HTML tag
              selectors for general usage(.center, .light-font, .effect-1...)
              other selectors follows order of targets appear in the HTML document.
