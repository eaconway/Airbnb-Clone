const state = {
  entities: {
    users: {
      1: {
        id: 1,
        username: iceman,
        hostRating: 4.5,
        guestRating: 5,
        host_description: "I do this for fun"
      },
      3: {
        id: 3,
        username: icegirl,
        hostRating: 5,
        guestRating: 4,
        host_description: "Why do I do this?!"
      }
    },
    homes: {
      1: {
        id: 1,
        longitude: 37.1342563632,
        latitude: -40.236364226443,
        streetNumber: 3,
        streetDetail: 203,
        street: "Brewster Ave",
        city: "Redwood City",
        state: "CA",
        zipcode: 21093,
        beds: 2,
        baths: 2,
        bedrooms: 2,
        internet: true,
        washer: false,
        dryer: false
      }
    },
    hostings: {
      1: {
        id: 1,
        hostId: 1,
        homeId: 1
      }
    },
    bookings: {
      1: {
        id: 1,
        homeId: 1,
        guestId: 3,
        startBooking: "7-26-2019",
        endBooking: "7-30-2019",
      }
    },
    reviews: {
      2: {
        id: 2,
        authorId: 3,
        homeId: 1,
        title: "Best home ever!",
        body: "The bomb dot com",
        reviewRating: 4
        createdAt: "8-1-2019",
        updatedAt: "8-1-2019"
      }
    },
    favorites: {
      1 : {
        id: 1,
        guestId: 3,
        homeId: 1
      }
    },
    conversations: {
      1: {
        id: 1,
        hostId: 1,
        guestId: 3,
        homeId: 1,
        bookingId: 1,
        created_at: "7-1-2019"
      }
    },
    messages: {
      1: {
        id: 1,
        conversationId: 1,
        authorId: 3,
        message: "Hi, can I book your house?"
        created_at: "7-1-2019"
      },
      2: {
        id: 2,
        conversationId: 1,
        authorId: 1,
        message: "Sure can! Can't wait to see you",
        created_at: "7-2-2019"
      }
    }
  },
  ui: {
    loading: true/false
  },
  session: {
    currentUserId: 3,
  },
  errors: {
    login: ["Incorrect username/password combination"],
    bookingDates: ["Must choose a start and ending date"]
    bookingUnavailable: ["This booking isn't available during this time"],
    noService: ["Sorry, we don't service this area yet!"],
    noHomes: ["Sorry, there are no homes available during your travel ranges"],
    reviewLimit: ["You may only leave one review for this host, per booking"],
    reviewRating: ["You must choose a review betwen 0 and 5"],
    reviewTitle: ["Please choose a header for your review"]
  }
}
