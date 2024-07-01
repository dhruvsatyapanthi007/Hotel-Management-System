package com.hotel_management_system.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel_management_system.backend.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    
}
