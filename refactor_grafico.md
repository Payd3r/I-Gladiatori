okey ora vorrei che ti concentrassi solo sull'estetica. rifacciamo interamente la grafica del sito perchè cosi è troppo basica. vorrei che avesse un tocco moderno ma da pizzeria non troppo formale, facile per l'utente da interagire ma esteticamente molto più bello, scegli un design sistem da seguire e ricostruisci tutta la grafica del sito. non so se al posto di bootstrap sarebbe meglio tailwind.
Le regole di design da seguire sono le seguenti:
{
  "design_rules": {
    "color_palette": {
      "primary": [
        "#000000",
        "#FFFFFF",
        "#FFC107"
      ],
      "secondary": [
        "#D97706",
        "#F59E0B",
        "#4B5563"
      ],
      "accent": [
        "#DC2626",
        "#10B981"
      ],
      "notes": "L'uso di sfondi scuri fa risaltare le immagini del cibo. [2, 10] I colori caldi come il rosso e il giallo sono usati per stimolare l'appetito. [15] I colori terrosi e naturali possono essere utilizzati per comunicare freschezza e un approccio artigianale. [2, 13] Un arancione o un giallo acceso viene spesso utilizzato per i pulsanti di invito all'azione (CTA) per attirare l'attenzione. [4]"
    },
    "typography": {
      "headings": {
        "font_family": [
          "Playfair Display",
          "Oswald",
          "Lato"
        ],
        "font_style": [
          "Serif",
          "Sans-serif"
        ],
        "notes": "I caratteri per i titoli sono spesso una combinazione di eleganti caratteri serif e audaci caratteri sans-serif per creare un contrasto visivo. [2, 8] La tipografia deve essere chiara e leggibile, anche su sfondi scuri."
      },
      "body_text": {
        "font_family": [
          "Lato",
          "Open Sans",
          "Roboto"
        ],
        "font_style": [
          "Sans-serif"
        ],
        "notes": "Il testo del corpo è tipicamente un carattere sans-serif pulito e leggibile per una facile lettura. [17] La dimensione del carattere deve essere sufficientemente grande per essere leggibile su tutti i dispositivi. [3]"
      },
      "accent_text": {
        "font_family": [
          "Pacifico",
          "Lobster"
        ],
        "font_style": [
          "Script"
        ],
        "notes": "I caratteri script possono essere utilizzati con parsimonia per aggiungere un tocco di personalità ed eleganza, ad esempio per i loghi o le promozioni speciali."
      }
    },
    "layout": {
      "structure": [
        "Header",
        "Hero Section",
        "Menu Highlights",
        "Special Offers",
        "About Us",
        "Footer"
      ],
      "principles": [
        "Grid-based",
        "Asymmetrical"
      ],
      "notes": "I layout sono generalmente puliti e basati su griglia, ma possono incorporare elementi asimmetrici per creare interesse visivo. [3] L'uso di ampi spazi bianchi (o spazi scuri) aiuta a focalizzare l'attenzione sugli elementi importanti. [16] Il design deve essere responsive per garantire una buona esperienza utente su tutti i dispositivi, in particolare sui dispositivi mobili. [3, 5]"
    },
    "imagery": {
      "style": [
        "High-quality",
        "Professional",
        "Appetizing"
      ],
      "subject_matter": [
        "Close-up shots of pizza",
        "Ingredients",
        "People enjoying the food",
        "Restaurant interior/ambiance"
      ],
      "notes": "Le immagini di alta qualità e dall'aspetto appetitoso del cibo sono fondamentali per invogliare i clienti. [4, 12] Le immagini dovrebbero mostrare non solo il cibo, ma anche l'atmosfera e l'esperienza del ristorante. [16] L'uso di video può rendere il sito più dinamico e coinvolgente. [2]"
    },
    "components": {
      "buttons": {
        "style": [
          "Pill-shaped",
          "Rectangular with rounded corners"
        ],
        "states": [
          "Default",
          "Hover",
          "Active"
        ],
        "notes": "I pulsanti di invito all'azione (CTA) come \"Ordina ora\" o \"Prenota un tavolo\" devono essere ben visibili e avere un colore contrastante. [4, 12]"
      },
      "navigation": {
        "style": "Sticky header with clear links",
        "links": [
          "Home",
          "Menu",
          "About Us",
          "Contact",
          "Order Online"
        ],
        "notes": "La navigazione deve essere semplice e intuitiva, con le informazioni più importanti facilmente accessibili. [3, 5]"
      },
      "forms": {
        "style": "Simple and clean with clear labels",
        "fields": [
          "Name",
          "Email",
          "Message"
        ],
        "notes": "I moduli, come quelli per l'iscrizione alla newsletter o per i contatti, devono essere facili da compilare."
      },
      "cards": {
        "style": "Used to display menu items or testimonials",
        "elements": [
          "Image",
          "Title",
          "Description",
          "Price"
        ],
        "notes": "Le card sono un modo efficace per organizzare e presentare le informazioni in modo visivamente accattivante."
      },
      "icons": {
        "style": "Simple and consistent with the brand",
        "usage": [
          "Social media links",
          "Contact information",
          "Special features (e.g., delivery, pickup)"
        ],
        "notes": "Le icone aiutano a comunicare visivamente le informazioni e a migliorare l'usabilità del sito. [7]"
      }
    }
  }
}