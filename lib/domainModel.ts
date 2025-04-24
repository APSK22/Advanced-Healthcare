/**
 * ARMS Healthcare System Domain Model
 * 
 * This file demonstrates object-oriented principles using realistic actors
 * from the ARMS Healthcare system 
 */

/**
 * Abstract User class with common attributes
 */
abstract class User {
  protected id: string;
  protected name: string;
  protected email: string;
  private _phone: string;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this._phone = phone;
  }

  // Getters and setters for encapsulation
  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getId(): string {
    return this.id;
  }

  // Phone number getter with formatting
  public getPhone(): string {
    return this._phone;
  }

  // Phone number setter with validation
  public setPhone(phone: string): void {
    // Basic validation for phone number format (simplified for demo)
    if (/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      this._phone = phone;
    } else {
      throw new Error('Invalid phone number format');
    }
  }

  // Abstract method that must be implemented by child classes
  public abstract getRole(): string;
}

/**
 * Patient class extending User
 */
class Patient extends User {
  private medicalHistory: string[];
  private allergies: string[];
  private idProof: string;
  private appointments: Appointment[];

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    medicalHistory: string[] = [],
    allergies: string[] = [],
    idProof: string
  ) {
    super(id, name, email, phone);
    this.medicalHistory = medicalHistory;
    this.allergies = allergies;
    this.idProof = idProof;
    this.appointments = [];
  }

  public getRole(): string {
    return 'Patient';
  }

  public getMedicalHistory(): string[] {
    return [...this.medicalHistory];
  }

  public addMedicalRecord(record: string): void {
    this.medicalHistory.push(record);
  }

  public getAllergies(): string[] {
    return [...this.allergies];
  }

  public getIdProof(): string {
    return this.idProof;
  }

  public getAppointments(): Appointment[] {
    return [...this.appointments];
  }

  public addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }
}

/**
 * Doctor class extending User
 */
class Doctor extends User {
  private specialization: string;
  private availableSlots: TimeSlot[];
  private patients: Patient[];

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    specialization: string
  ) {
    super(id, name, email, phone);
    this.specialization = specialization;
    this.availableSlots = [];
    this.patients = [];
  }

  public getRole(): string {
    return 'Doctor';
  }

  public getSpecialization(): string {
    return this.specialization;
  }

  public getAvailableSlots(): TimeSlot[] {
    return [...this.availableSlots];
  }

  public addAvailableSlot(slot: TimeSlot): void {
    this.availableSlots.push(slot);
  }

  public getPatients(): Patient[] {
    return [...this.patients];
  }

  public addPatient(patient: Patient): void {
    if (!this.patients.some(p => p.getId() === patient.getId())) {
      this.patients.push(patient);
    }
  }
}

/**
 * Admin class extending User
 */
class Admin extends User {
  private accessLevel: 'basic' | 'intermediate' | 'full';

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    accessLevel: 'basic' | 'intermediate' | 'full' = 'basic'
  ) {
    super(id, name, email, phone);
    this.accessLevel = accessLevel;
  }

  public getRole(): string {
    return 'Admin';
  }

  public getAccessLevel(): string {
    return this.accessLevel;
  }

  public manageAppointments(appointments: Appointment[]): void {
    console.log(`Admin ${this.name} is managing ${appointments.length} appointments`);
    // In a real system, this would contain logic for scheduling, rescheduling,
    // canceling appointments, etc.
  }
}

/**
 * Helper classes to represent domain objects
 */
class TimeSlot {
  constructor(
    public date: Date,
    public startTime: string,
    public endTime: string,
    public isBooked: boolean = false
  ) {}
}

class Appointment {
  private id: string;
  private doctor: Doctor;
  private patient: Patient;
  private timeSlot: TimeSlot;
  private status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';

  constructor(
    id: string,
    doctor: Doctor,
    patient: Patient,
    timeSlot: TimeSlot,
    status: 'scheduled' | 'completed' | 'cancelled' | 'no-show' = 'scheduled'
  ) {
    this.id = id;
    this.doctor = doctor;
    this.patient = patient;
    this.timeSlot = timeSlot;
    this.status = status;
  }

  public getId(): string {
    return this.id;
  }

  public getDoctor(): Doctor {
    return this.doctor;
  }

  public getPatient(): Patient {
    return this.patient;
  }

  public getTimeSlot(): TimeSlot {
    return this.timeSlot;
  }

  public getStatus(): string {
    return this.status;
  }

  public updateStatus(newStatus: 'scheduled' | 'completed' | 'cancelled' | 'no-show'): void {
    this.status = newStatus;
  }
}

/**
 * SystemLogger class - an internal actor/utility class
 */
class SystemLogger {
  private static logEntries: string[] = [];

  public static logActivity(user: User, action: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] User ${user.getName()} (${user.getRole()}) - ${action}`;
    
    this.logEntries.push(logEntry);
    console.log(logEntry);
  }

  public static getLogs(): string[] {
    return [...this.logEntries];
  }

  public static clearLogs(): void {
    this.logEntries = [];
  }
}

