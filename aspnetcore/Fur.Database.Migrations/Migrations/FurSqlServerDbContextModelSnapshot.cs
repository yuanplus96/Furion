﻿// <auto-generated />
using System;
using Fur.EntityFramework.Core.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Fur.Database.Migrations.Migrations
{
    [DbContext(typeof(FurSqlServerDbContext))]
    partial class FurSqlServerDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0-preview.7.20365.15");

            modelBuilder.Entity("Fur.Core.DbEntities.Test", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("TenantId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("UpdatedTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Test");
                });

            modelBuilder.Entity("Fur.DatabaseAccessor.MultipleTenants.Entities.Tenant", b =>
                {
                    b.Property<Guid>("TenantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ConnectionString")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Host")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Schema")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedTime")
                        .HasColumnType("datetime2");

                    b.HasKey("TenantId");

                    b.ToTable("Tenant");

                    b.HasData(
                        new
                        {
                            TenantId = new Guid("f1e60229-222d-4c93-933f-2a50b3c6d26c"),
                            ConnectionString = "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;",
                            CreatedTime = new DateTime(2020, 7, 29, 14, 53, 31, 541, DateTimeKind.Local).AddTicks(9823),
                            Host = "localhost:44307",
                            IsDeleted = false,
                            Name = "默认租户",
                            Schema = "fur",
                            UpdatedTime = new DateTime(2020, 7, 29, 14, 53, 31, 543, DateTimeKind.Local).AddTicks(2096)
                        },
                        new
                        {
                            TenantId = new Guid("5dbfaa37-420c-461d-9ba1-dd27052201f4"),
                            ConnectionString = "Server=localhost;Database=Other;User=sa;Password=000000;MultipleActiveResultSets=True;",
                            CreatedTime = new DateTime(2020, 7, 29, 14, 53, 31, 543, DateTimeKind.Local).AddTicks(4744),
                            Host = "localhost:41529",
                            IsDeleted = false,
                            Name = "其他租户",
                            Schema = "other",
                            UpdatedTime = new DateTime(2020, 7, 29, 14, 53, 31, 543, DateTimeKind.Local).AddTicks(4750)
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
