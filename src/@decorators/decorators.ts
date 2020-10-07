// @Component
// @Selector
// @useState("foo")
/** Class decorator, Property decorator, Method decorator, Parameter decorator, Acessor decorator */

// Factory
function logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}`);
  };
}

@logger('awesome')
class Foo {}

/** Class Decorator */

function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// decorator -> anotar a versão da API
@setAPIVersion('1.0.0')
class API {}

console.log(new API());

/** */

/** Property Decorator */

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: você não pode criar ${key} menor que ${length}`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação - se for menor que 5 -> error
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar');

/** */

/** Method Decorator */

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // Esperar um tempo e depois rodar o método (ms)
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const people = new Greeter('Fulano');
people.greet();
