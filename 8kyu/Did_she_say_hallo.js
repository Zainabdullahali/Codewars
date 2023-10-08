function validateHello(greetings) {
  const Hello = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const lowercaseGreetings = greetings.toLowerCase();
  return Hello.some((greeting) => lowercaseGreetings.includes(greeting));
}
