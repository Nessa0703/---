from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

association_table = Table(
    "user_book_association",
    Base.metadata,
    Column("user_id", ForeignKey("users.id")),
    Column("book_id", ForeignKey("books.id"))
)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    favorites = relationship("Book", secondary=association_table, back_populates="users")

class Book(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    users = relationship("User", secondary=association_table, back_populates="favorites")