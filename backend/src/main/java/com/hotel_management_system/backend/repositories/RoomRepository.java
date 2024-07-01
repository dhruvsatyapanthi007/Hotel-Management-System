package com.hotel_management_system.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel_management_system.backend.entities.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    
}

