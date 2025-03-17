class Pet {
  constructor(name, species, vaccinations, healthCheckDate, alreadyWarned) {
    this.name = name;
    this.species = species;
    this.vaccinations = vaccinations;
    this.healthCheckDate = healthCheckDate;
    this.alreadyWarned = alreadyWarned;
  }
}

class PetHealthManager {
  constructor() {
    this.pets = [];
  }
  registerPet(pet) {
    return `[등록] ${pet.species} - ${pet.name} (예방접종 : [${pet.vaccinations}], 건강검진 : ${pet.healthCheckDate})`;
  }
}

// 🐾 시스템 사용 예시
const manager = new PetHealthManager();

// 펫 등록
const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);
console.log(manager.registerPet(pet1));

// 예방접종 추가
// pet1.addVaccination('광견병');
// pet1.addVaccination('광견병'); // 중복 테스트

// // 건강 상태 검사 시작
// manager.checkHealthStatus();

// // 5초 후 건강검진 업데이트 (경고 초기화 테스트)
// setTimeout(() => {
//   pet1.updateHealthCheckDate(new Date());
// }, 5000);
